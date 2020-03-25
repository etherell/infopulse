// Объявление переменных
var lastMontMeterValue	= 1000, 	// Показания счетчика в прошлом месяце
	thisMontMeterValue	= 1480,		// Показания счетчика в этом месяце
	KWtoPay				= 0,		// Разница в кВт между текущим и прошлым месяцем
	dayNightMeter		= true,		// Показатель наличия счетчика
	nightMeterKW		= 100,		// Показания ночного счетчика
	nightToPay			= 0,		// К оплате по ночному тарифу
	dayMeterKW			= 0,		// Показания дневного счетчика
	dayToPay			= 0,		// К оплате по дневному тарифу
	subsidy				= true,		// Наличие субсидии
	subsidyValue		= 200,		// Размер субсидии
	prevPeriodDebt		= 900,		// Долг за предыдущий период
	countedThisMonth	= 0,		// Насчитано в этом месяце
	toPay 				= 0,		// Значение к оплате
	totalToPay			= 0,		// Всего к оплате
	beneficiary			= true;		// Льготник - инвалид, участник боевых действий и т.д.


// Константы
var KW_FOR_REDUCED_TARIFF = 100; // Максимальное количество кВт для пониженного тарифа
var BENEFICIARY_COEFF	  = 0.9; // Скидка для льготников

// Тарифы
tarrifs = {
	"reduced" 	: 0.9,
	"usual"		: 1.68,
	"night"		: 0.84
}

// Сообщения для клиента
var messages = {
	KWtoPayMessage				: 	"В этом месяце Вы израсходовали:",
	nightMeterMessage			: 	"По ночному тарифу израсходовано:",
	nightToPayMessage			: 	"К оплате по ночному тарифу:",
	dayMeterMessage				: 	"По дневному тарифу израсходовано:",
	dayToPayMessage				: 	"К оплате по дневному тарифу:",
	toPayMessage				:  	"Текущая сумма к оплате:",
	usualMeterMessage			: 	"У Вас обычный счетчик",
	reducedTariffMessage		: 	"У Вас сниженный тариф:",
	reducedDayTariffMessage		: 	"У Вас сниженный дневной тариф:",
	zeroValueMessage			: 	"Вы ничего не израсходовали, очень жаль",
	subsidyMessage				: 	"Сумма к оплате после вычета субсидии:",
	beneficiaryMessage			: 	"Сумма к оплате после вычета льгот:",
	debtMessage					: 	"Сумма к оплате с учетом задолженности:",
	NoDebtMessage				: 	"У Вас нет задолженности, Вы молодец",
	totalToPayMessage			: 	"Итого к оплате:"
};

// Расход кВт за месяц
KWtoPay = thisMontMeterValue - lastMontMeterValue;
console.log(messages.KWtoPayMessage, KWtoPay, "кВт");

// Расчет суммы к оплате


// Если есть ночно счетчик и маленький расход
if (dayNightMeter && nightMeterKW > 0 && KWtoPay < 100) {
	nightToPay = nightMeterKW * tarrifs.night;
	console.log (messages.nightMeterMessage, nightMeterKW, "кВт");
	console.log (messages.nightToPayMessage, nightToPay, "грн");

	dayMeterKW = KWtoPay - nightMeterKW;
	dayToPay = dayMeterKW * tarrifs.reduced;
	toPay = nightToPay + dayToPay
	console.log (messages.dayMeterMessage, dayMeterKW, "кВт");
	console.log (messages.reducedDayTariffMessage, tarrifs.reduced, "грн/кВт");
	console.log (messages.dayToPayMessage, dayToPay, "грн");
	console.log (messages.toPayMessage, toPay, "грн")
// Если есть ночной счетчик и обычный расход
} else if (dayNightMeter && nightMeterKW > 0 ) {
	nightToPay = nightMeterKW * tarrifs.night;
	console.log (messages.nightMeterMessage, nightMeterKW, "кВт");
	console.log (messages.nightToPayMessage, nightToPay, "грн");

	dayMeterKW = KWtoPay - nightMeterKW;
	dayToPay = dayMeterKW * tarrifs.usual;
	toPay = nightToPay + dayToPay
	console.log (messages.dayMeterMessage, dayMeterKW, "кВт");
	console.log (messages.dayToPayMessage, dayToPay, "грн");
	console.log (messages.toPayMessage, toPay, "грн")
// Сниженный расход с обычным счетчиком
} else if (KWtoPay < 100 && KWtoPay != 0) {
	console.log (messages.usualMeterMessage);
	toPay = KWtoPay * tarrifs.reduced;
	console.log (messages.reducedTariffMessage, tarrifs.reduced, "грн/кВт");
	console.log (messages.toPayMessage, toPay, "грн")
// Обычный расход
} else if (KWtoPay > 100) {
	console.log (messages.usualMeterMessage);
	toPay = KWtoPay * tarrifs.usual;
	console.log (messages.toPayMessage, toPay, "грн")
// Расход отсутствует
} else {
	console.log (messages.zeroValueMessage);
}

// Учёт субсидии

if (subsidy && toPay > subsidyValue && subsidyValue != 0) {
	toPay -= subsidyValue;
	console.log(messages.subsidyMessage, toPay, "грн");
}

// Учёт льгот

if (beneficiary && toPay != 0) {
	toPay = Math.round(toPay * BENEFICIARY_COEFF);
	console.log(messages.beneficiaryMessage, toPay, "грн");
}

// Учёт долгов
prevPeriodDebt > 0 ? console.log(messages.debtMessage, (toPay += prevPeriodDebt), "грн") : console.log(messages.NoDebtMessage);

// Итоговая сумма к оплате
console.log(messages.totalToPayMessage, toPay, "грн");