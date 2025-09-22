import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заявку, ${name}! Мы свяжемся с вами по номеру ${phone}`);
    setName('');
    setPhone('');
    setMessage('');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Group Repair</div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('advantages')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Преимущества
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Добро пожаловать в <span className="text-primary">Group Repair</span>!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Мы — ваша надежная команда профессионалов с 10-летним опытом в сфере ремонтов под ключ премиум качества. 
            Наша цель — сделать ваш дом идеальным, а процесс ремонта — комфортным и беззаботным.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Наши услуги
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Icon name="Hammer" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Ремонт под ключ</h3>
                <p className="text-muted-foreground">
                  Мы берем на себя все этапы ремонта, от проектирования до финальной отделки. 
                  Каждый проект выполняется с максимальным вниманием к деталям и высоким качеством.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Icon name="Sparkles" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Клининг</h3>
                <p className="text-muted-foreground">
                  После завершения ремонта мы обеспечим тщательную уборку вашего пространства, 
                  чтобы вы могли наслаждаться новым интерьером без лишних забот.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Icon name="FileText" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Сдача в управляющую компанию</h3>
                <p className="text-muted-foreground">
                  Мы поможем вам подготовить все необходимые документы и передать ваше жилье в управляющую компанию.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Почему выбирают нас?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Icon name="Award" size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Премиум качество</h3>
              <p className="text-muted-foreground">
                Мы используем только лучшие материалы и современные технологии.
              </p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Icon name="Settings" size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Полный сервис</h3>
              <p className="text-muted-foreground">
                Мы заботимся о каждом этапе, чтобы вы могли расслабиться и довериться нам.
              </p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Icon name="Shield" size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Опыт и надежность</h3>
              <p className="text-muted-foreground">
                10 лет на рынке — это гарантия нашего профессионализма.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Оставьте заявку!</h2>
            <p className="text-lg text-muted-foreground">
              Хотите узнать больше или обсудить свой проект? Оставьте заявку по номеру телефона, 
              и наш менеджер свяжется с вами в ближайшее время!
            </p>
          </div>

          <Card className="bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите ваше имя"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Номер телефона
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Сообщение (необязательно)
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-primary mb-4">Group Repair</div>
          <p className="text-muted-foreground mb-6">
            Профессиональные ремонты премиум качества с 10-летним опытом
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('advantages')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            © 2024 Group Repair. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}