<template>
    <AppIcons/>
    <main class="container">
        <header class="header">
            <AppBigTitle class="header__big-title"
                         string-top="Trade–in"
                         string-bottom="Ingrad"
                         text="+7 (495) 256-40-69"
                         text-link="tel:+74952564069"
            />
            <AppComparison :before="comparison.before"
                           :after="comparison.after"
                           :divider-position="50"
            />
        </header>

        <section class="fears">
            <AppHuman class="fears__human"
                      :image="fears.human.image"
                      :title="fears.human.title"
            />
            <AppTreeList class="fears__list"
                         :list="fears.list"
            />
        </section>

        <AppIcon class="delimiter"
                 icon="delimiter"
                 :height="220"
                 :width="4"
        />

        <section class="contra">
            <AppBigTitle class="contra__big-title"
                         string-top="За <span style='font-size: .6em'>и</span>"
                         string-bottom="против"
            />
            <div class="contra__boards">
                <AppContraList v-for="(item, index) in contra"
                               class="contra__board"
                               :class="[
                                   item.list.length > 5 ? 'contra__board_long' : 'contra__board_short'
                               ]"
                               :key="`contra-list_item_${index}`"
                               v-bind="item"
                />
            </div>
        </section>

        <section class="get-main">
            <h2 class="get-main__title">
                А главное, вы получаете
            </h2>

            <AppMobSliderCards :list="getMainSlides"/>
        </section>

        <AppIcon class="delimiter"
                 icon="delimiter"
                 :height="220"
                 :width="4"
        />

        <section class="ransom">
            <AppBigTitle class="ransom__big-title"
                         string-top="Инград"
                         string-bottom="Выкупает"
                         :image="ransom.image"
            />
        </section>

        <section class="land-form">
            <AppHuman class="land-form__human"
                      :image="form.human.image"
                      :title="form.human.title"
                      :list="form.human.list"
            />

            <AppTradeInForm ref="landform"
                            class="land-form__form"
                            id="form"
            />
        </section>

        <section class="to-form"
                 :class="{ 'to-form_active': toFormActive }"
        >
            <AppButton href="#form"
                       class="to-form__button"
            >
                Хочу продать
            </AppButton>
        </section>
    </main>
</template>


<script>
import AppIcons from '@/components/UI/Icons/AppIcons.vue';
import AppIcon from '@/components/UI/Icons/AppIcon.vue';
import AppButton from '@/components/UI/Button/AppButton.vue';
import AppBigTitle from '@/components/BigTitle/AppBigTitle.vue';
import AppComparison from '@/components/UI/Comparison/AppComparison.vue';
import AppMobSliderCards from '@/components/UI/MobSliderCards/AppMobSliderCards.vue';
import AppHuman from '@/components/Human/AppHuman.vue';
import AppTreeList from '@/components/TreeList/AppTreeList.vue';
import AppContraList from '@/components/ContraList/AppContraList.vue';
import AppTradeInForm from '@/components/TradeInForm/AppTradeInForm.vue';

export default {
    name       : 'App',
    components : {
        AppIcons,
        AppIcon,
        AppBigTitle,
        AppHuman,
        AppTreeList,
        AppContraList,
        AppComparison,
        AppMobSliderCards,
        AppTradeInForm,
        AppButton,
    },

    data() {
        return {
            toFormActive : true,
            comparison   : {
                before : {
                    image : '/images/comparison/before.png',
                    text  : 'До трейдина',
                },

                after : {
                    image : '/images/comparison/after.png',
                    text  : 'После трейдина',
                },
            },

            fears : {
                human : {
                    image : '/images/peoples/1.png',
                    title : 'Главные страхи покупателя новой квартиры',
                },

                list : [
                    'Денег не хватит',
                    'Застройщик обманет',
                    'Не потяну ипотеку',
                    'Ещё аренду платить',
                    'Новое место',
                    'Ремонт делать',
                    'Вдруг не достроят',
                    'Возня с документами',
                    'Где взять на первый взнос',
                ],
            },

            contra : [
                {
                    title : 'deliverance',
                    human : {
                        image : '/images/peoples/2.png',
                        title : 'От чего вы избавляетесь',
                    },

                    list : [
                        'Старая квартира',
                        'Унылый пейзаж за окном',
                        '«Бабушкин» ремонт',
                        'Шум и гам за стеной',
                        'Куча машин во дворе',
                    ],

                    isStrike : true,
                },
                {
                    title : 'acquisitions',
                    human : {
                        image : '/images/peoples/3.png',
                        title : 'Что вы приобретаете',
                    },

                    list : [
                        'Новую квартиру в новом квартале',
                        'Современную архитектуру',
                        'Дизайнерские интерьеры дома',
                        'Чистовую отделку',
                        'Передовые инженерные технологии',
                        'Благоустроенный двор без машин',
                        'Высокие потолки, панорамные окна',
                        'Район с благоприятной экологией',
                        'Развитую инфраструктуру',
                        'Красивые виды из окон',
                    ],
                },
            ],

            ransom : {
                image : {
                    url   : '/images/stamp.svg',
                    sizes : {
                        dWidth  : '453px',
                        dHeight : '453px',
                        mWidth  : '199px',
                        mHeight : '199px',
                    },

                    position : {
                        horizontalState : 'left',
                        verticalState   : 'top',
                        dTransform      : 'translate(-62px, -65px)',
                        mTransform      : 'translate(-52px, -35px)',
                    },
                },
            },

            getMainSlides : [
                {
                    icon  : 'banknot',
                    title : 'Безопасную сделку',
                },
                {
                    icon  : 'money-hand',
                    title : 'Стоимость старой квартиры в зачёт',
                },
                {
                    icon  : 'double-bed',
                    title : 'Возможность жить у себя до переезда в новый дом',
                },
                {
                    icon  : 'banknot',
                    title : 'Отсутствие затрат на всех этапах сделки',
                },
            ],

            form : {
                human : {
                    image : '/images/peoples/4.png',
                    title : 'Как это работает',
                    list  : [
                        'Оставьте заявку или позвоните нам',
                        'Менеджер уточнит детали и вернеться с ответом',
                        'Можно заселяться и устраивать новоселье =)',
                    ],
                },
            },
        };
    },

    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.toFormActive = !entry.isIntersecting;
            });
            // eslint-disable-next-line no-magic-numbers
        }, { threshold: 0.1 });

        observer.observe(this.$refs.landform.$el);
    },
};
</script>

<style lang="scss">
    .container {
        width: 100%;
        max-width: 1440px;
        overflow-x: hidden;
        padding: 42px;

        @media (max-width: 620px) {
            width: 100vw;
            padding: 20px;
        }

        .header {
            margin-bottom: 75px;

            &__big-title {
                margin-bottom: 36px;
            }
        }

        .delimiter {
            display: block;
            margin: 24px auto 40px;

            @include tablet {
                margin-top: 85px;
                margin-bottom: 80px;
            }
        }

        .fears {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 920px) {
                flex-direction: column;
            }

            &__human {
                max-width: 690px;
            }

            &__tree {
                flex-grow: 1;
            }
        }

        .contra {
            .big-title {
                margin-bottom: 55px;

                &__top {
                    @media (max-width: 620px) {
                        margin-right: auto;
                        margin-left: 0;
                    }
                }
            }

            &__boards {
                @include tablet {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }


                @media (max-width: 1024px) {
                    flex-direction: column;
                }
            }

            &__board {
                &_short {
                    @media (min-width: 1024px) {
                        max-width: 402px;
                    }
                }

                &_long {
                    flex-grow: 1;
                }

                @media (max-width: 740px) {
                    margin-top: 56px;
                }
            }
        }

        .get-main {
            padding-top: 80px;

            &__title {
                margin-top: 0;
                margin-bottom: 32px;
                font-size: 30px;
                font-weight: 500;
                line-height: 32px;
                text-align: center;
                letter-spacing: -2.1px;
                font-family: $drunk;
                color: $white;

                @include tablet {
                    margin-bottom: 40px;
                    font-size: 64px;
                    line-height: 63px;
                    letter-spacing: -3.2px;
                }
            }
        }

        .ransom {
            margin-bottom: 24px
        }

        .land-form {
            display: flex;
            align-items: flex-start;
            gap: 60px;
            width: 100%;

            &__human,
            &__form {
                width: 100%;
            }

            &__form {
                background-color: $black-10;
                flex-grow: 1;
                padding: 48px;
                border-radius: 16px;

                @media (max-width: 880px) {
                    padding: 16px;
                    width: 100%;
                }

                @media (min-width: 880px) {
                    max-width: 625px;
                }
            }

            @media (max-width: 880px) {
                flex-direction: column;
            }
        }

        .to-form {
            background-image: linear-gradient(0deg, #000 0%, rgb(0 0 0 / 0%) 100%);
            display: flex;
            padding: 20px 16px;
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            opacity: 0;
            transition-duration: $transition-duration;

            @media (min-width: 640px) {
                display: none;
            }

            &_active {
                opacity: 1;
            }

            &__button {
                width: 100%;
            }
        }
    }
</style>
