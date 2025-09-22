import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="bg-card shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Group Repair</div>
            <div className="hidden md:flex space-x-8">
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
                onClick={() => scrollToSection('portfolio')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('advantages')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('contacts')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Добро пожаловать в Group Repair!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мы — ваша надежная команда профессионалов с 10-летним опытом в сфере ремонтов под ключ премиум качества. 
            Наша цель — сделать ваш дом идеальным, а процесс ремонта — комфортным и беззаботным.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Icon name="Home" className="mr-2" size={20} />
              Наши услуги
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Phone" className="mr-2" size={20} />
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

      {/* Портфолио */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/e364b57b-959b-4292-865a-b22dbe0fd865.jpg" 
                alt="Ремонт гостиной премиум класса"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-card-foreground">Гостиная премиум</h3>
                <p className="text-sm text-muted-foreground mt-1">Элегантный ремонт с теплыми тонами</p>
              </CardContent>
            </Card>

            <Card className="bg-card overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/fabbf593-f30c-4ee7-914b-dcc21f765981.jpg" 
                alt="Современная кухня"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-card-foreground">Современная кухня</h3>
                <p className="text-sm text-muted-foreground mt-1">Функциональный дизайн с премиум материалами</p>
              </CardContent>
            </Card>

            <Card className="bg-card overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/f9eb9d2a-d018-40ae-ae13-332a472ebd01.jpg" 
                alt="Роскошная ванная комната"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-card-foreground">Роскошная ванная</h3>
                <p className="text-sm text-muted-foreground mt-1">Спа-дизайн с натуральными материалами</p>
              </CardContent>
            </Card>

            {[4, 5, 6].map((item) => (
              <Card key={item} className="bg-card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-card-foreground">Проект {item}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Ремонт квартиры премиум класса</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Group Repair — это команда профессионалов с 10-летним опытом в сфере ремонтов. 
                Мы специализируемся на ремонтах под ключ премиум качества и гордимся каждым завершенным проектом.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-primary mr-3" size={20} />
                  <span className="text-foreground">10 лет успешной работы</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-primary mr-3" size={20} />
                  <span className="text-foreground">Более 500 завершенных проектов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-primary mr-3" size={20} />
                  <span className="text-foreground">Команда сертифицированных специалистов</span>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <Icon name="Users" size={64} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Почему выбирают нас?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Icon name="Star" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Премиум качество</h3>
                <p className="text-muted-foreground">
                  Мы используем только лучшие материалы и современные технологии для достижения идеального результата.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Icon name="Shield" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Полный сервис</h3>
                <p className="text-muted-foreground">
                  Мы заботимся о каждом этапе, чтобы вы могли расслабиться и довериться нам полностью.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Icon name="Award" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Опыт и надежность</h3>
                <p className="text-muted-foreground">
                  10 лет на рынке — это гарантия нашего профессионализма и качества выполненных работ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="contacts" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-6">Оставьте заявку!</h2>
          <p className="text-center text-muted-foreground mb-8">
            Хотите узнать больше или обсудить свой проект? Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время!
          </p>
          
          <Card className="bg-card">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Номер телефона
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Сообщение (необязательно)
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите ваш проект или задайте вопрос"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4">Group Repair</div>
          <p className="text-primary-foreground/80 mb-4">
            Профессиональный ремонт под ключ с 10-летним опытом
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" size={16} />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" size={16} />
              <span>info@grouprepair.ru</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;