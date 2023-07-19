<template>
    <div class="trade-in-form__form">
        <AppField label="Ваше имя"
            class="trade-in-form__2fr"
            name="name"
            required
        />
        <AppField label="Контактный телефон"
            type="tel"
            class="trade-in-form__2fr"
            name="phone"
            placeholder="+7"
        />
        <AppField label="Адрес"
            class="trade-in-form__2fr"
            name="address"
        />
        <AppField label="Номер дома"
            class="trade-in-form__2fr"
            name="house-number"
        />
        <AppField label="Этажность дома"
            class="trade-in-form__3fr"
            name="floors"
        />
        <AppField label="Этаж квартиры"
            class="trade-in-form__3fr"
            name="floor"
        />
        <AppField label="Кол-во комнат"
            class="trade-in-form__3fr"
            name="rooms"
        />
        <AppField label="Общая площадь"
            class="trade-in-form__2fr"
            name="total-area"
            interlineation="м<sup>2</sup>"
        />
        <AppField label="Площадь кухни"
            class="trade-in-form__2fr"
            name="kitchen-area"
            interlineation="м<sup>2</sup>"
        />
        <AppButton type="submit" class="trade-in-form__1fr">
            Оценить стоимость квартиры
        </AppButton>
    </div>
</template>

<script>
import AppButton from '@/components/UI/Button/AppButton.vue';
import AppField from '@/components/UI/Field/AppField.vue';

export default {
    name: "AppTradeInForm",
    components : {
        AppButton,
        AppField
    }
}
</script>

<style lang="scss">
.trade-in-form__form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
}

.trade-in-form__1fr{
    width: 100%;
}
.trade-in-form__2fr{
    align-self: center;
    width: calc((100% - 24px) / 2);

    @media (max-width: 1100px) {
        width: 100%
    }
}
.trade-in-form__3fr{
    width: calc((100% - (24px * 2)) / 3);

    @media (max-width: 1100px) {
        width: 100%;
    }
}
</style>
