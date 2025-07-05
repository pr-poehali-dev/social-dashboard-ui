import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Мокап данных пользователя
  const user = {
    name: "Александр Космос",
    username: "@alex_cosmos",
    avatar: "/img/f39b3174-5aee-454c-bf06-4080d6bc822f.jpg",
    bio: "Разработчик космических приложений 🚀",
    followers: 1247,
    following: 892,
    posts: 156,
    location: "Москва, Россия",
    joined: "Март 2022",
  };

  // Мокап друзей
  const friends = [
    {
      name: "Мария Звездная",
      username: "@maria_star",
      avatar: "👩‍🚀",
      online: true,
    },
    {
      name: "Дмитрий Орбита",
      username: "@dmitry_orbit",
      avatar: "👨‍🚀",
      online: false,
    },
    {
      name: "Елена Галактика",
      username: "@elena_galaxy",
      avatar: "👩‍🔬",
      online: true,
    },
    {
      name: "Игорь Планета",
      username: "@igor_planet",
      avatar: "🧑‍🚀",
      online: true,
    },
    {
      name: "Анна Комета",
      username: "@anna_comet",
      avatar: "👩‍💻",
      online: false,
    },
    {
      name: "Сергей Метеор",
      username: "@sergey_meteor",
      avatar: "👨‍🔬",
      online: true,
    },
  ];

  // Мокап постов в ленте
  const posts = [
    {
      id: 1,
      author: "Мария Звездная",
      username: "@maria_star",
      avatar: "👩‍🚀",
      time: "2 часа назад",
      content:
        "Только что закончила работу над новым проектом! Космические технологии становятся все более доступными 🚀",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      author: "Дмитрий Орбита",
      username: "@dmitry_orbit",
      avatar: "👨‍🚀",
      time: "4 часа назад",
      content:
        "Интересная статья о новых открытиях в области астрофизики. Наука не стоит на месте!",
      likes: 67,
      comments: 15,
    },
    {
      id: 3,
      author: "Елена Галактика",
      username: "@elena_galaxy",
      avatar: "👩‍🔬",
      time: "6 часов назад",
      content:
        "Сегодня был потрясающий день в лаборатории. Эксперименты идут лучше, чем планировали! 🔬✨",
      likes: 89,
      comments: 23,
    },
  ];

  // Мокап постов пользователя о Clash Royale
  const userPosts = [
    {
      id: 1,
      time: "1 час назад",
      content:
        "Наконец-то дошел до 6000 кубков! 🏆 Новая колода с Хогом и Мусорщиком творит чудеса. Кто еще играет в CR?",
      likes: 156,
      comments: 24,
      image: "🏆",
    },
    {
      id: 2,
      time: "3 часа назад",
      content:
        "Только что выиграл турнир! Мегарыцарь в последний момент спас партию 🗡️ Адреналин зашкаливает!",
      likes: 203,
      comments: 38,
      image: "🗡️",
    },
    {
      id: 3,
      time: "5 часов назад",
      content:
        "Обновление принесло новые карты! Уже тестирую Электро-дракона в боях. Кто-нибудь пробовал? 🐉⚡",
      likes: 89,
      comments: 17,
      image: "🐉",
    },
    {
      id: 4,
      time: "1 день назад",
      content:
        "Клановые войны на новом уровне! Наш клан 'Космические Рыцари' занял 2 место в лиге 🚀👑",
      likes: 127,
      comments: 31,
      image: "👑",
    },
    {
      id: 5,
      time: "2 дня назад",
      content:
        "Собрал идеальную защитную колоду! Инферно-башня + Ледяной дух останавливают любой пуш ❄️🔥",
      likes: 95,
      comments: 22,
      image: "❄️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-400">SpaceNet</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>АК</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-gray-700">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-blue-600"
            >
              <Icon name="User" size={16} className="mr-2" />
              Мой профиль
            </TabsTrigger>
            <TabsTrigger
              value="friends"
              className="data-[state=active]:bg-blue-600"
            >
              <Icon name="Users" size={16} className="mr-2" />
              Друзья
            </TabsTrigger>
            <TabsTrigger
              value="feed"
              className="data-[state=active]:bg-blue-600"
            >
              <Icon name="Home" size={16} className="mr-2" />
              Лента
            </TabsTrigger>
          </TabsList>

          {/* Профиль */}
          <TabsContent value="profile" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Основная информация */}
              <Card className="lg:col-span-2 bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-2xl">АК</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white">
                        {user.name}
                      </CardTitle>
                      <p className="text-gray-400 text-lg">{user.username}</p>
                      <p className="text-gray-300 mt-2">{user.bio}</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Icon name="MapPin" size={16} />
                          <span>{user.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Icon name="Calendar" size={16} />
                          <span>Присоединился {user.joined}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Статистика */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Статистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Подписчики</span>
                      <span className="text-white font-semibold">
                        {user.followers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Подписки</span>
                      <span className="text-white font-semibold">
                        {user.following.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Посты</span>
                      <span className="text-white font-semibold">
                        {user.posts}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Мои посты */}
            <div className="mt-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Grid3X3" size={20} className="mr-2" />
                    Мои посты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>АК</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">
                              {user.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {user.username} • {post.time}
                            </p>
                          </div>
                          <div className="text-3xl">{post.image}</div>
                        </div>
                        <p className="text-gray-300 mb-3">{post.content}</p>
                        <div className="flex items-center space-x-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-red-400"
                          >
                            <Icon name="Heart" size={16} className="mr-1" />
                            {post.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-blue-400"
                          >
                            <Icon
                              name="MessageCircle"
                              size={16}
                              className="mr-1"
                            />
                            {post.comments}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-green-400"
                          >
                            <Icon name="Share" size={16} className="mr-1" />
                            Поделиться
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Друзья */}
          <TabsContent value="friends" className="mt-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Мои друзья</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {friends.map((friend, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                            {friend.avatar}
                          </div>
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-700 ${
                              friend.online ? "bg-green-500" : "bg-gray-500"
                            }`}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">
                            {friend.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {friend.username}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Icon
                            name="MessageCircle"
                            size={16}
                            className="mr-1"
                          />
                          Сообщение
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="UserCheck" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Лента */}
          <TabsContent value="feed" className="mt-6">
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xl">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">
                          {post.author}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {post.username} • {post.time}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{post.content}</p>
                    <div className="flex items-center space-x-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-red-400"
                      >
                        <Icon name="Heart" size={16} className="mr-1" />
                        {post.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-blue-400"
                      >
                        <Icon name="MessageCircle" size={16} className="mr-1" />
                        {post.comments}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-green-400"
                      >
                        <Icon name="Share" size={16} className="mr-1" />
                        Поделиться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
