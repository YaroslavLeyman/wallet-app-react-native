# Мобильное приложение кошелёк на react-native

Stack: React-Native, Redux, Expo, UI-Kitten

Ниже представлена визуальная часть проекта.

## Главные страницы ("Дисконты", "Банковские карты", "Кешбэк")
<picture display="flex">
  <img src="https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/pages/DiscountPage.jpg" width="300" />
  <img src="https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/pages/BankPage.jpg" width="300" />
</picture>
<img src="https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/pages/DiscountPage.jpg" width="300" />
<img src="https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/pages/BankPage.jpg" width="300" />
<img src="https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/pages/CashBackPage.jpg" width="300" />

### Страница "Дисконты"

**Функционал**
1. Отображается пользователю по дефолту.
2. На главной странице реализована возможность сделать фото или выбрать изображение из галереи устройства.
3. Дополнительно реализована возможность добавить карту по нажатию на иконку вверху экрана.
4. После выбора изображения отображается экран добавления.
5. Сохраненная карта отображается на главном экране (последующие по аналогии, есть скролл).
6. При клике на карту отображаются данные карты, в зависимости от комбинации цифр номера карты присваевается либо штрих-код (добавлено 12-13 цифр), либо qr-код (любая другая комбинация).
7. Возможность удаления карты, с всплывающим окном уточнения.
8. Маршруты настроены так, что из раздела данных карты можно выйти назад по стрелке вверху экрана или по клику на карту.

![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/discount/DiscountPage.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/discount/1.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/discount/2.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/discount/3.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/discount/4.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/discount/5.jpg)

### Страница "Банковские карты"

**Функционал**
1. Возможность добавить карту вверху и в середине экрана.
2. Отображение ввода реквизитов карты с валидацией.
3. Сохраненная карта отображается на главном экране (последующие по аналогии, есть скролл).
4. Номер карты скрывается до последних 4х цифр, CVV скрывается.
5. По клику на карту открываются данные карты, отображается весь номер карты и CVV.

![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/bank/BankPage.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/bank/1.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/bank/2.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/bank/3.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/bank/4.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/bank/5.jpg)

### Страница "Кешбэк"

**Функционал**
1. Функционал будет дорабатываться

![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/cashback/CashBackPage.jpg)
![Image alt](https://github.com/YaroslavLeyman/wallet-app-react-native/raw/master/assets/images/cashback/1.jpg)


Приложение в дальнейшем будет дорабатываться.
