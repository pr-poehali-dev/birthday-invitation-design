import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '',
    dietary: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    alert('Спасибо за подтверждение! Мы ждём вас на празднике 🎉');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.1), rgba(139, 21, 56, 0.2)), url('/img/b5dd0f9d-d776-404d-84d5-20db04c6da45.jpg')`
        }}
      >
        <div className="text-center z-10 max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="mb-8">
            <Icon name="Gift" size={64} className="text-primary mx-auto mb-6 animate-scale-in" />
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-serif">
              День Рождения
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Приглашение на незабываемый праздник
            </p>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl animate-scale-in">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Вы приглашены на праздник!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Присоединяйтесь к нам на особенном дне, полном радости, смеха и незабываемых воспоминаний. 
                Ваше присутствие сделает этот праздник ещё более особенным!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Программа праздника</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "18:00", event: "Встреча гостей", icon: "Users" },
              { time: "18:30", event: "Фуршет и коктейли", icon: "Wine" },
              { time: "19:30", event: "Торжественная часть", icon: "Mic" },
              { time: "20:00", event: "Танцы до утра", icon: "Music" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20">
                <CardContent className="p-6">
                  <Icon name={item.icon as any} size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{item.time}</h3>
                  <p className="text-muted-foreground">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Time Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Место и время</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Icon name="Calendar" size={24} />
                  Дата и время
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold mb-2">15 августа 2024</p>
                <p className="text-lg text-muted-foreground">Суббота, 18:00</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Просим не опаздывать к началу торжественной части
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Icon name="MapPin" size={24} />
                  Место проведения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold mb-2">Ресторан "Золотой зал"</p>
                <p className="text-muted-foreground">ул. Праздничная, 25</p>
                <p className="text-muted-foreground">г. Москва</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Бесплатная парковка для гостей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Дресс-код</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <Card className="border-primary/20">
            <CardContent className="p-12">
              <Icon name="Shirt" size={64} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Элегантный коктейльный</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Приветствуются наряды в бордовых, розовых и золотых тонах. 
                Для мужчин — костюм или брюки с рубашкой, для женщин — платье или элегантный костюм.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gifts Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-accent/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">О подарках</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <Card className="border-primary/20">
            <CardContent className="p-12">
              <Icon name="Heart" size={64} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Ваше присутствие — лучший подарок!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мы будем рады видеть вас на нашем празднике. Если вы всё же хотите сделать подарок, 
                будем благодарны за:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-muted-foreground">
                <p>• Книги по искусству</p>
                <p>• Путешествия и впечатления</p>
                <p>• Что-то, сделанное своими руками</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Подтверждение присутствия</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6">
              Пожалуйста, подтвердите своё участие до 10 августа
            </p>
          </div>
          
          <Card className="border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-primary font-semibold">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 border-primary/30 focus:border-primary"
                    placeholder="Введите ваше полное имя"
                    required
                  />
                </div>
                
                <div>
                  <Label className="text-primary font-semibold">Буду присутствовать</Label>
                  <div className="flex gap-4 mt-2">
                    <Button
                      type="button"
                      variant={formData.attendance === 'yes' ? 'default' : 'outline'}
                      onClick={() => handleInputChange('attendance', 'yes')}
                      className="flex-1"
                    >
                      <Icon name="Check" size={16} className="mr-2" />
                      Да, обязательно!
                    </Button>
                    <Button
                      type="button"
                      variant={formData.attendance === 'no' ? 'destructive' : 'outline'}
                      onClick={() => handleInputChange('attendance', 'no')}
                      className="flex-1"
                    >
                      <Icon name="X" size={16} className="mr-2" />
                      К сожалению, нет
                    </Button>
                  </div>
                </div>
                
                {formData.attendance === 'yes' && (
                  <>
                    <div>
                      <Label htmlFor="guests" className="text-primary font-semibold">Количество гостей</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="4"
                        value={formData.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        className="mt-2 border-primary/30 focus:border-primary"
                        placeholder="Включая вас"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="dietary" className="text-primary font-semibold">Пищевые предпочтения</Label>
                      <Input
                        id="dietary"
                        value={formData.dietary}
                        onChange={(e) => handleInputChange('dietary', e.target.value)}
                        className="mt-2 border-primary/30 focus:border-primary"
                        placeholder="Вегетарианство, аллергии и т.д."
                      />
                    </div>
                  </>
                )}
                
                <div>
                  <Label htmlFor="message" className="text-primary font-semibold">Пожелания</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 border-primary/30 focus:border-primary"
                    placeholder="Ваши пожелания или особые просьбы"
                    rows={3}
                  />
                </div>
                
                <Button type="submit" className="w-full text-lg py-6" disabled={!formData.name || !formData.attendance}>
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить подтверждение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Телефон</h3>
                <p className="text-lg">+7 (999) 123-45-67</p>
                <p className="text-muted-foreground mt-2">По любым вопросам</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-lg">birthday@party.ru</p>
                <p className="text-muted-foreground mt-2">Ответим в течение дня</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Heart" size={32} className="mx-auto mb-4" />
          <p className="text-lg">Ждём вас на нашем празднике!</p>
          <p className="text-sm opacity-75 mt-2">С любовью и нетерпением ❤️</p>
        </div>
      </footer>
    </div>
  );
}