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
                         string-top="Pro et"
                         string-bottom="Contra"
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

            <AppTradeInForm class="land-form__form" />
        </section>
    </main>
</template>


<script>
import AppIcons from '@/components/UI/Icons/AppIcons.vue';
import AppIcon from '@/components/UI/Icons/AppIcon.vue';
import AppBigTitle from '@/components/BigTitle/AppBigTitle.vue';
import AppComparison from '@/components/UI/Comparison/AppComparison.vue';
import AppMobSliderCards from '@/components/UI/MobSliderCards/AppMobSliderCards.vue';
import AppHuman from '@/components/Human/AppHuman.vue';
import AppTreeList from '@/components/TreeList/AppTreeList.vue';
import AppContraList from '@/components/ContraList/AppContraList.vue';
import AppTradeInForm from '@/components/Trade-inForm/AppTrade-inForm.vue';

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
        AppTradeInForm
    },

    data() {
        return {
            comparison : {
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
                    url   : '/images/stamp.png',
                    sizes : {
                        dWidth  : '280px',
                        dHeight : '280px',
                        mWidth  : '99px',
                        mHeight : '99px',
                    },

                    position : {
                        horizontalState : 'left',
                        verticalState   : 'top',
                        dTransform      : 'translate(40px, -45px)',
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
            }
        };
    },
};
</script>

<style lang="scss">
.header {
    margin-bottom: 75px;

    &__big-title {
        margin-bottom: 36px;
    }
}

.container {
    width: 100%;
    max-width: 1440px;
    padding: 42px;
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
    @include tablet {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__human {
        max-width: 690px;
        width: 100%;
    }

    &__tree {
        max-width: 575px;
        width: 100%;
    }
}

.contra {
    &__big-title {
        margin-bottom: 55px;
    }

    &__boards {
        @include tablet {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
    }

    &__board {
        &_short {
            @include tablet {
                max-width: 402px;
            }
        }

        &_long {
            flex-grow: 1;
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

.land-form {
    display: flex;
    align-items: flex-start;
    gap: 60px;
    width: 100%;

    @include tablet {
        .land-form__human {
            max-width: 680px;
        }
    }
}
</style>
