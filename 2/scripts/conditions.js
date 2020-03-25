//Задаём основные переменные
var orderSum 		= 3033,
	discount 		= 0,
	saving 			= 0,
	deliveryPrice	= 50,
	isVipClient		= true,
	isPromoCode		= true,
	bonusCard 		= 3200,
	bonusInUAH		= 0;

//Задаём сообщения для клиента
var messages = {
	freeDelivery 				: 	"Доставка бесплатная",
	paidDelivery  				: 	"Стоимость доставки 50 грн",
	orderSumInfo  				: 	"Стоимость заказа",
	discountInfo				: 	"Ваша скидка по сумме заказа:",
	vipDiscountInfo				: 	"Ваша суммарная скидка:",
	promoCodeMessage			: 	"Ваша скидка по промо коду:",
	savingInfo					: 	"Вы экономите:",
	totalOrderSum				: 	"Сумма к оплате:",	
	totalOrderSumWithDelivery	: 	"Сумма к оплате с учетом доставки:",
	vipClientMessage			: 	"Ваша скидка увеличена на",
	bonusCardInfo				: 	"С Вашей бонусной карты снято:"
};

//Задаём константы
var FREE_DELIVERY_LIMIT 	= 500;
var DISCOUNT_SUM_LIMIT 		= 700;
var VIP_CLIENT_ADD_DISCOUNT	= 3;
var PROMO_CODE_PRICE		= 200;
var BONUS_CONVERT_DATA		= 100;
var MIN_BONUS_LIMIT			= 1000;

//Расчитываем сумму скидки
	if (orderSum >= 700 && orderSum < 2000) {
		discount = 5;
		
	}
	else if (orderSum >= 2000 && orderSum < 5000) {
		discount = 7;
	}
	else if (orderSum >= 5000) {
		discount = 10;
			if (isVipClient) {
				discount += VIP_CLIENT_ADD_DISCOUNT;
			}
	}



//Вывод суммы
console.log(messages.orderSumInfo, orderSum, "грн");

		if(isPromoCode && orderSum >= PROMO_CODE_PRICE) {
			orderSum -= PROMO_CODE_PRICE
			console.log (messages.promoCodeMessage, PROMO_CODE_PRICE, "грн")
		}

//Вычитаем бонусы из суммы
bonusInUAH = bonusCard / BONUS_CONVERT_DATA;

if(bonusCard >= MIN_BONUS_LIMIT && orderSum >= bonusInUAH) {
	orderSum -= bonusInUAH;
	console.log(messages.bonusCardInfo, bonusCard, "бонусов", bonusInUAH, "грн")
	bonusCard = 0;
}

	if (orderSum >= DISCOUNT_SUM_LIMIT) {
		if(isVipClient && orderSum >= 5000) {
			console.log(messages.vipClientMessage, VIP_CLIENT_ADD_DISCOUNT + "%");
		}

			//Вывод % скидки
			console.log(isVipClient ? messages.vipDiscountInfo : messages.discountInfo, discount + "%");

			//Вывод суммы скидки
			saving = orderSum * discount / 100;
			console.log(messages.savingInfo, Math.round(saving + (isPromoCode ? PROMO_CODE_PRICE : 0) + bonusInUAH) + " грн");
	}	



//Вывод суммы со скидкой
orderSum -= saving;
console.log(messages.totalOrderSum, Math.floor(orderSum), "грн");


//Считаем стоимость доставки
	if (orderSum >= FREE_DELIVERY_LIMIT) {
		console.log(messages.freeDelivery);
		deliveryPrice = 0;
	} 
	else {
		console.log(messages.paidDelivery)
	};

	//Добавляем стоимость доставки
	if (deliveryPrice > 0) {
	orderSum += deliveryPrice;
	console.log(messages.totalOrderSumWithDelivery, Math.floor(orderSum), "грн");
	}

