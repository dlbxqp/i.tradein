<template>
    <form class="trade-in-form">
        <component v-for="(field, index) in fields"
                   :is="field.type === 'select' ? 'AppSelect' : 'AppField'"
                   :key="`trade-in-form__field-${index}`"
                   class="trade-in-form__field"
                   :class="`trade-in-form__field_${field.size}`"
                   from="UI"
                   :component="field.type === 'select' ? 'AppSelect' : 'AppField'"
                   v-bind="field"
                   v-model="field.value"
                   @add-error="addFieldError"
                   @remove-error="removeFieldError"
        />


        <p class="trade-in-form__polit">
            <AppCheckbox class="trade-in-form__check"
                         v-model:checked="politCheck"
                         id="polit_form"
            />
            <span>
                Я соглашаюсь на
                <a href="//www.ingrad.ru/pages/politika_obrabotki_personalnyh_dannyh/"
                    target="_blank"
                >
                    &nbsp;обработку персональных данных
                </a>
            </span>
        </p>

        <AppButton type="submit"
                   class="trade-in-form__button"
                   :disabled="button.isDisabled"
                   :icon="button.icon"
                   :icon-size="18"
                   @click="submitForm"
        >
            {{ button.text }}
        </AppButton>
    </form>
</template>

<script>
import AppButton from '@/components/UI/Button/AppButton.vue';
import AppCheckbox from '@/components/UI/Checkbox/AppCheckbox.vue';
import AppField from '@/components/UI/Field/AppField.vue';
import AppSelect from '@/components/UI/Select/AppSelect.vue';

const ADDICTION_TEXT_FIELDS = ['kitchen-area'];

export default {
    name       : 'AppTradeInForm',
    components : {
        AppButton,
        AppCheckbox,
        AppSelect,
        AppField,
    },

    data() {
        return {
            politCheck : false,
            button     : {
                isDisabled : true,
                text       : 'Оценить стоимость квартиры',
                icon       : '',
            },

            /* eslint-disable no-magic-numbers */
            fields : [
                {
                    value    : '',
                    name     : 'name',
                    type     : 'text',
                    required : true,
                    error    : 'Укажите имя',
                    label    : 'Ваше имя',
                    size     : 'half',
                    isError  : false,
                    regExp   : /[^а-яёa-z\s-]/ig,
                    min      : 2,
                },
                {
                    value       : '',
                    label       : 'Контактный телефон',
                    name        : 'phone',
                    type        : 'tel',
                    mask        : '{+7} (000) 000 00 00',
                    placeholder : '+7',
                    required    : true,
                    size        : 'half',
                    error       : 'Укажите номер телефона',
                    isError     : false,
                },
                {
                    value    : '',
                    label    : 'Регион РФ',
                    name     : 'region',
                    type     : 'text',
                    required : true,
                    size     : 'half',
                    error    : 'Укажите регион',
                    isError  : false,
                    regExp   : /[^а-яёa-z\s-]/ig,
                    min      : 5,
                },
                {
                    value    : '',
                    label    : 'Населенный пункт',
                    name     : 'city',
                    type     : 'text',
                    required : true,
                    size     : 'half',
                    error    : 'Укажите населенный пункт',
                    isError  : false,
                    regExp   : /[^а-яёa-z0-9\s-]/ig,
                    min      : 5,
                },
                {
                    value    : '',
                    label    : 'Адрес',
                    name     : 'address',
                    type     : 'text',
                    required : true,
                    size     : 'half',
                    error    : 'Укажите адрес',
                    regExp   : /[^а-яёa-z0-9\s-]/ig,
                    isError  : false,
                },
                {
                    value    : '',
                    label    : 'Номер дома',
                    name     : 'house-number',
                    type     : 'text',
                    required : true,
                    size     : 'half',
                    error    : 'Укажите номер дома.',
                    regExp   : /[^а-яёa-z0-9\s-]/ig,
                    isError  : false,
                },
                {
                    value    : '',
                    type     : 'select',
                    label    : 'Тип дома',
                    name     : 'house-type',
                    required : true,
                    size     : 'half',
                    error    : 'Выберите тип дома',
                    isError  : false,
                    options  : [
                        {
                            label : 'Панельный',
                            value : 'Панельный',
                        },
                        {
                            label : 'Блочный',
                            value : 'Блочный',
                        },
                        {
                            label : 'Кирпичный',
                            value : 'Кирпичный',
                        },
                        {
                            label : 'Монолитный',
                            value : 'Монолитный',
                        },
                    ],
                },
                {
                    value    : '',
                    type     : 'select',
                    label    : 'Состояние квартиры',
                    name     : 'room-state',
                    required : true,
                    size     : 'half',
                    error    : 'Выберите состояние квартиры',
                    isError  : false,
                    options  : [
                        {
                            label : 'Качественный ремонт',
                            value : 'Качественный ремонт',
                        },
                        {
                            label : 'Среднее состояние',
                            value : 'Среднее состояние',
                        },
                        {
                            label : 'Неудовлетворительное состояние',
                            value : 'Неудовлетворительное состояние',
                        },
                        {
                            label : 'Отделка от застройщика',
                            value : 'Отделка от застройщика',
                        },
                        {
                            label : 'Без отделки',
                            value : 'Без отделки',
                        },
                    ],
                },
                {
                    value    : '',
                    label    : 'Этажность дома',
                    name     : 'floors',
                    type     : 'number',
                    required : true,
                    size     : 'third',
                    error    : 'Укажите этажность дома.',
                    isError  : false,
                    regExp   : /\D/ig,
                    max      : 200,
                },
                {
                    value     : '',
                    label     : 'Этаж квартиры',
                    name      : 'floor',
                    type      : 'number',
                    required  : true,
                    size      : 'third',
                    error     : 'Укажите этаж квартиры.',
                    isError   : false,
                    regExp    : /\D/ig,
                    max       : 200,
                    addiction : 'floors',
                },
                {
                    value    : '',
                    label    : 'Кол-во комнат',
                    name     : 'rooms',
                    type     : 'text',
                    required : true,
                    size     : 'third',
                    error    : 'Укажите количество комнат.',
                    isError  : false,
                    regExp   : /\D/ig,
                    max      : 20,
                },
                {
                    value          : '',
                    label          : 'Общая площадь',
                    name           : 'total-area',
                    type           : 'text',
                    required       : true,
                    size           : 'half',
                    error          : 'Укажите площадь квартиры.',
                    interlineation : 'м<sup>2</sup>',
                    isError        : false,
                    regExp         : /[^\d.]/ig,
                    max            : 6,
                },
                {
                    value          : '',
                    label          : 'Площадь кухни',
                    name           : 'kitchen-area',
                    type           : 'text',
                    required       : true,
                    size           : 'half',
                    error          : 'Укажите площадь кухни.',
                    interlineation : 'м<sup>2</sup>',
                    isError        : false,
                    regExp         : /[^\d.]/ig,
                    max            : 6,
                    addiction      : 'total-area',
                },
            ],

            /* eslint-enable */
        };
    },

    watch : {
        fields : {
            handler(newValue) {
                newValue.forEach(field => {
                    if (
                        field?.addiction?.length
                        && (field.type === 'number' || ADDICTION_TEXT_FIELDS.includes(field.name))
                    ) {
                        const depends = newValue.filter(itemField => itemField.name === field.addiction)[0];

                        if (depends?.value && field.value) {
                            field.isError = parseFloat(depends?.value) < parseFloat(field.value);
                        }

                        field.max = depends?.value ? parseFloat(depends?.value) : field.max ?? 0;
                        field.min = depends?.min ? parseFloat(depends?.min) : field.min ?? 0;
                    }
                });

                this.lockButton();
            },

            deep : true,
        },

        politCheck : {
            handler() {
                this.lockButton();
            }
        }
    },

    methods : {
        lockButton() {
            this.button.isDisabled = this.fields.some(element => (element.isError || (element.required && !element.value.length) || !this.politCheck));
        },

        addFieldError(fieldName) {
            this.fields.forEach(field => {
                field.isError = field.name === fieldName;
            });
        },

        removeFieldError(fieldName) {
            this.fields.forEach(field => {
                if (field.name === fieldName) {
                    field.isError = false;
                }
            });
        },

        async submitForm() {
            const data = {};

            this.fields.forEach(item => {
                item.isError = item.isError || (item.required && !item.value.length);
                data[item.name] = item.value;
            });

            if (this.fields.find(item => item.isError) && !this.politCheck) {
                return false;
            }

            this.button.isDisabled = true;

            try {
                await fetch(
                    'https://wd.ingrad.ru/other/toEMail/tradeIn.php',
                    {
                        method  : 'POST',
                        mode    : 'cors',
                        cache   : 'no-cache',
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded',
                        },
                        body : new URLSearchParams(data),
                    },
                );

                const buttonOldText = this.button.text;

                this.button.isDisabled = false;

                this.button.text = 'Заявка отправлена';
                this.button.icon = 'checkicon';

                setTimeout(() => {
                    this.button.text = buttonOldText;
                    this.button.icon = '';
                    // eslint-disable-next-line no-magic-numbers
                }, 5000);
            }
            catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style lang="scss">
.trade-in-form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 24px;

    &__button {
        width: 100%;
    }

    &__field {
        &_half {
            width: calc(50% - 12px);

            @media (max-width: 1100px) {
                width: 100%
            }
        }

        &_third {
            width: calc(33.333% - 16px);

            @media (max-width: 1100px) {
                width: 100%;
            }
        }

        &_max {
            width: 100%;
        }
    }

    &__polit {
        font-size: 12px;
        line-height: 1.5;
        color: $white;
        margin: 0;
        display: flex;
        align-items: flex-start;

        a {
            color: $primary-60;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    &__check {
        margin-right: 10px;
        transform: translateY(-2px);
    }
}
</style>
