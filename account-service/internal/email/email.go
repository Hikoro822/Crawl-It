package email

import (
	"account-system/config"
	"fmt"
	"net/smtp"
)

type EmailService struct {
	Config config.Config
}

func NewEmailService(cfg config.Config) *EmailService {
	return &EmailService{
		Config: cfg,
	}
}

func (s *EmailService) SendPasswordResetEmail(to, code string) error {
    host := s.Config.SMTPHost
    port := s.Config.SMTPPort
    user := s.Config.SMTPUser
    password := s.Config.SMTPPassword
    from := s.Config.SMTPFrom

    fmt.Printf("[ВАЖНО] Код сброса для %s: %s\n", to, code)
    
    if host == "" || user == "" || password == "" {
        return nil
    }

	subject := "Сброс пароля в Crawl-It"
	body := fmt.Sprintf("Здравствуйте!\n\nВы запросили сброс пароля в системе Crawl-It.\n\nВаш код для сброса пароля: %s\n\nКод действителен в течение 15 минут.\n\nЕсли вы не запрашивали сброс пароля, проигнорируйте это сообщение.\n\nС уважением,\nКоманда Crawl-It", code)

	message := fmt.Sprintf("From: %s\nTo: %s\nSubject: %s\n\n%s", from, to, subject, body)

	auth := smtp.PlainAuth("", user, password, host)

	addr := fmt.Sprintf("%s:%s", host, port)
	to_list := []string{to}

	err := smtp.SendMail(addr, auth, from, to_list, []byte(message))
	if err != nil {
		return err
	}

	return nil
}

func (s *EmailService) SendHTMLEmail(to, subject, htmlBody string) error {
	host := s.Config.SMTPHost
	port := s.Config.SMTPPort
	user := s.Config.SMTPUser
	password := s.Config.SMTPPassword
	from := s.Config.SMTPFrom

	if host == "" || user == "" || password == "" {
		fmt.Printf("[DEV MODE] Отправка HTML-письма на %s с темой: %s\n", to, subject)
		return nil
	}

	headers := make(map[string]string)
	headers["From"] = from
	headers["To"] = to
	headers["Subject"] = subject
	headers["MIME-Version"] = "1.0"
	headers["Content-Type"] = "text/html; charset=UTF-8"

	message := ""
	for key, value := range headers {
		message += fmt.Sprintf("%s: %s\r\n", key, value)
	}
	message += "\r\n" + htmlBody

	auth := smtp.PlainAuth("", user, password, host)

	addr := fmt.Sprintf("%s:%s", host, port)
	to_list := []string{to}

	err := smtp.SendMail(addr, auth, from, to_list, []byte(message))
	if err != nil {
		return err
	}

	return nil
}