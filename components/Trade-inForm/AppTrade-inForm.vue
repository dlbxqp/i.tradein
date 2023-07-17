<template>
    <div class="land-form__form">
        <AppField label="Ваше имя"
            class="land-form__2fr"
            name="name"
            required
        />
        <AppField label="Контактный телефон"
            type="tel"
            class="land-form__2fr"
            name="phone"
            placeholder="+7"
        />
        <AppField label="Адрес"
            class="land-form__2fr"
            name="street"
            placeholder="Улица"
        />
        <AppField label="Номер дома"
            class="land-form__2fr"
            name="house-num"
        />
        <AppField label="Этажность дома"
            class="land-form__3fr"
            name="house-floor"
        />
        <AppField label="Этаж квартиры"
            class="land-form__3fr"
            name="flat-floor"
        />
        <AppField label="Кол-во комнат"
            class="land-form__3fr"
            name="room-col"
        />
        <AppField label="Общая площадь"
            class="land-form__2fr"
            name="flat-square"
            interlineation="м<sup>2</sup>"
        />
        <AppField label="Площадь кухни"
            class="land-form__2fr"
            name="kitchen-square"
            interlineation="м<sup>2</sup>"
        />
        <AppButton type="submit" class="land-form__1fr">
            Оценить стоимость квартиры
        </AppButton>
    </div>
</template>

<script>
import AppButton from '@/components/UI/Button/AppButton.vue';
import AppField from '@/components/UI/Field/AppField.vue';

export default {
    name: "AppTrade-inForm",
    components : {
        AppButton,
        AppField
    }
}
</script>

<style lang="scss">
.land-form__form{
    background-color: $black-10;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 24px;
    padding: 48px;
}

.land-form__1fr{
    flex-basis: 100%;
}
.land-form__2fr{
    align-self: center;
    flex-basis: calc((100% - 24px) / 2);

    @media all and (max-width: 880px) {
        flex-basis: 100%;
    }
}
.land-form__3fr{
    flex-basis: calc((100% - (24px * 2)) / 3);

    @media all and (max-width: 880px) {
        flex-basis: 100%;
    }
}
</style>
