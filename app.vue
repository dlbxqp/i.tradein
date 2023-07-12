<template xmlns="">
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
            <AppContraList v-for="(item, index) in contra" :class="`contra__${item.title}`"
                :key="`contra-list_item_${index}`"
                :human="item.human"
                :list="item.list"
                :isStrike="item.isStrike"
            />
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
        <section class="form">
            <AppHuman class="form__human"
                      :image="form.human.image"
                      :title="form.human.title"
                      :list="form.human.list"
            />
        </section>
    </main>
</template>

<script>
import AppIcons from '@/components/UI/Icons/AppIcons.vue';
import AppBigTitle from '@/components/BigTitle/AppBigTitle.vue';
import AppHuman from '@/components/Human/AppHuman.vue';
import AppTreeList from '@/components/TreeList/AppTreeList.vue';
import AppContraList from '@/components/ContraList/AppContraList.vue';
import AppComparison from '@/components/UI/Comparison/AppComparison.vue';
import AppMobSliderCards from '@/components/UI/MobSliderCards/AppMobSliderCards.vue';
import AppIcon from '@/components/UI/Icons/AppIcon.vue';

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
    },

    data() {
        return {
            comparison : {
                before : {
                    image : '/assets/images/comparison/before.png',
                    text  : 'До трейдина',
                },

                after : {
                    image : '/assets/images/comparison/after.png',
                    text  : 'После трейдина',
                },
            },

            fears : {
                human : {
                    image : '/assets/images/peoples/1.png',
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
                    title: 'deliverance',
                    human : {
                        image : '/assets/images/peoples/2.png',
                        title : 'От чего вы избавляетесь',
                    },
                    list : [
                        'Старая квартира',
                        'Унылый пейзаж за окном',
                        '«Бабушкин» ремонт',
                        'Шум и гам за стеной',
                        'Куча машин во дворе'
                    ],
                    isStrike: true
                },
                {
                    title: 'acquisitions',
                    human : {
                        image : '/assets/images/peoples/3.png',
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
                        'Красивые виды из окон'
                    ]
                }
            ],

            ransom : {
                image : {
                    url   : '/assets/images/stamp.png',
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
                    image : '/assets/images/peoples/4.png',
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
        width: 1440px;
        margin: 0 auto;
    }

    .delimiter {
        display: block;
        margin: 0 auto;
        margin-top: 24px;
        margin-bottom: 40px;

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

    .form {
        max-width: 680px;
    }
</style>
