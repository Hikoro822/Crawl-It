import {ref, computed, onMounted} from 'vue';
import {fetchCourses} from '@/services/courses';
import {fetchTasks} from '@/services/tasks';

interface BaseStep {
    id: string;
    track: 'frontend' | 'backend';
    entity: 'course' | 'task';
    title: string;
    description: string;
    type: 'theory' | 'task';
    status: 'completed' | 'in-progress' | 'locked';
}

interface CourseStep extends BaseStep {
    entity: 'course';
    type: 'theory';
    contentTitle: string;
}

interface TaskStep extends BaseStep {
    entity: 'task';
    type: 'task';
    instructions: string;
}

type RoadmapStep = CourseStep | TaskStep;

interface Roadmap {
    frontend: RoadmapStep[];
    backend: RoadmapStep[];
}

interface ProgressStep {
    title: string;
    status: 'completed' | 'in-progress' | 'locked';
}

interface Progress {
    [key: string]: ProgressStep[];
}

export function useRoadMapList() {
    const activeCourse = ref<'frontend' | 'backend'>('frontend');
    const roadmaps = ref<Roadmap | null>(null);
    const progress = ref<Progress>({});

    const loadRoadmap = async () => {
        try {
            const allCourses = await fetchCourses();
            const allTasks = await fetchTasks();

            const allSteps = [...allCourses, ...allTasks];
            allSteps.sort((a, b) => {
                if (a.id !== b.id) {
                    return a.id - b.id;
                }
                if (a.type === b.type) return 0;
                return a.type === 'theory' ? -1 : 1;
            });
            roadmaps.value = {
                frontend: allSteps.filter(step => step.track === 'frontend'),
                backend: allSteps.filter(step => step.track === 'backend'),
            };
        } catch (error) {
            console.error('Ошибка загрузки roadmap:', error);
        }
    };

    onMounted(async () => {
        await loadRoadmap();
        if (roadmaps.value) {
            ['frontend', 'backend'].forEach((courseType) => {
                if (!progress.value[courseType]) {
                    progress.value[courseType] = roadmaps.value[courseType].map((step) => ({
                        id: step.id,
                        title: step.title,
                        status: step.status,
                        type: step.type,
                    }));
                }
            });
        }
    });

    const roadMapSteps = computed(() => {
        return progress.value[activeCourse.value] || (roadmaps.value && roadmaps.value[activeCourse.value]) || [];
    });

    const setActiveCourse = (courseType: 'frontend' | 'backend') => {
        activeCourse.value = courseType;
    };

    return {
        activeCourse,
        roadmaps,
        roadMapSteps,
        setActiveCourse,
    };
}
