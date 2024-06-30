export enum Pathology {
    CEREBRAL_PARALYSIS = "Инсульт",//"cerebralParalysis",
    MULTIPLE_SCLEROSIS = "Инфаркт",//"multipleSclerosis",
    SPINAL_CORD_INJURE = "Инклюзия",//"spinalCordInjure",
    STROKE = "Красный нос",//"stroke",
    TRAUMATIC_BRAIN_INJURY = "Мозг рака",//"traumaticBrainInjury"
}

export enum BodyPart {
    LEG = "Нога",
    ARM = "Рука"
}

export const allExercises = [
    {
        pathology: Pathology.CEREBRAL_PARALYSIS,
        bodyPart: BodyPart.LEG,
        exercises: [
            {
                description: 'Растяжка икр',
                instruction: ['Убедитесь, что вам есть к чему прислониться (например, к стене, стулу и т. д.), чтобы сохранять равновесие','Поставьте одну ногу на шаг позади себя, а затем медленно опустите пятку', 'Чтобы обеспечить более глубокое растяжение, отведите ногу еще дальше. Чтобы было легче, поднесите ногу ближе к остальному телу'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_leg_1.png') ]
            },
            {
                description: 'Маршируем сидя',
                instruction: ['Сядьте на край сиденья, поставив обе ступни на землю, затем поочередно поднимайте колени по одному','Это упражнение для ног позволяет практиковать движения, используемые при ходьбе, без дополнительной нагрузки на суставы'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_leg_2.png') ]
            },
            {
                description: 'Упражнения на подколенные сухожилия',
                instruction: ['Чтобы растянуть подколенные сухожилия, нужно сесть на пол, выпрямить обе ноги перед собой и наклонить тело вперед','Задержитесь на 30 секунд и повторите'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_leg_3.png')]
            },
    ]},
    {
        pathology: Pathology.CEREBRAL_PARALYSIS,
        bodyPart: BodyPart.ARM,
        exercises: [
            {
                description: 'Планка',
                instruction: ['Займите позу для отжиманий, расставив руки чуть шире плеч, а шею на одной линии со спиной. Их голова должна быть направлена вниз, к земле','Если обычная планка слишком сложна попробуйте на колени, а не на пальцы ног, или на предплечья, а не на руки. Это снизит давление и повысит стабильность, одновременно укрепив ядро', 'Удерживайте это положение 20–30 секунд'],
                images: [
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_1.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_1.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_1.png'),
                ]
            },
            {
                description: 'Растяжка плеч',
                instruction: ['Для растяжки плеч следует поднять одну руку и согнуть ее за головой','Другой рукой осторожно отвести локоть назад, пока не появится напряжение', 'Задержитесь на 20-30 секунд, а затем поменяйте руки'],
                images: [
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_2.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_2.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_2.png'),
                ]
            },
            {
                description: 'Рука над грудью',
                instruction: ['Поверните одну руку через грудь и используйте другую руку, чтобы удерживать первую на месте','Осторожно прижмите руку к телу, чтобы она плотнее обхватила грудь', 'Задержитесь на 20-30 секунд, а затем поменяйте сторону'],
                images: [
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_3.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_3.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/celebralParalysis_arm_3.png'),
                ]
            },
    ]},
    {
        pathology: Pathology.MULTIPLE_SCLEROSIS,
        bodyPart: BodyPart.LEG,
        exercises: [
            {
                description: 'Подъем со стула',
                instruction: ['Сядьте прямо на стул, ноги на ширине плеч, колени согнуты под углом 90 градусов',' Согнитесь в талии, перенося вес вперед', 'Отталкивайтесь пятками, пока стоите, напрягая квадрицепсы и ягодицы', ' Используйте стул или столешницу для дополнительного равновесия и помощи при стоянии', 'Медленно сядьте и повторите от 10 до 15 раз (добавьте вес для дополнительной нагрузки)'],
                images: [
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_1.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_1.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_1.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_1.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_1.png'),
                    ]
            },
            {
                description: 'Сидя: разгибание ног',
                instruction: ['Сядьте на прочный стул, касаясь спиной спинки стула','Удобно положите руки на ноги', 'Медленно поднимите левую ногу прямо вверх, оставив колено согнутым', 'Задержитесь в таком положении на 10 секунд (или столько, сколько вам удобно), а затем верните ногу на пол', 'Повторите с другой ногой'],
                images: 
                    [
                        require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_2.png'),
                        require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_2.png'),
                        require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_2.png'),
                        require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_2.png'),
                        require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_2.png'),
                    ]
            },
            {
                description: 'Упражнение для ног',
                instruction: ['Встаньте и держитесь за спинку стула обеими руками для поддержки','Поднимите пятку назад и попытайтесь коснуться ягодиц. Движение должно происходить в коленном суставе', 'Если вы не можете дотянуться, попросите кого-нибудь осторожно помочь вам руками поднять пятку как можно выше, без дискомфорта', 'Опустите ногу обратно на землю как можно медленнее'],
                images: [
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_3.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_3.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_3.png'),
                    require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_leg_3.png'),
                ]
            },
    ]},
    {
        pathology: Pathology.MULTIPLE_SCLEROSIS,
        bodyPart: BodyPart.ARM,
        exercises: [
            {
                description: 'Сидя: жим от плеч',
                instruction: ['Сядьте прямо на стул, ноги на ширине плеч и ровно на полу','Возьмите и держите гантели на плечах, запястья смотрят вперед', 'Выдохните, когда вы поднимаете вес  вверх, вытягивая руки вертикально', 'Вдохните, возвращая вес в исходное положение', 'Повторить 8–12 раз'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_arm_1.png')]
            },
            {
                description: 'Сидя: повороты со скручиванием',
                instruction: ['Удобно сядьте на стул без подлокотников или на скамью','Слегка откиньтесь назад, напрягая мышцы живота', 'Согните руки в локтях и держите руки вместе перед собой', 'Выдохните, поворачиваясь влево, ударяя правой рукой по левой стороне тела. Вдохните обратно в центр. Выдохните, повторяя в другую сторону', 'Начните с пяти повторений на каждую сторону. Отдохните и повторите 2–3 раза. Чтобы увеличить интенсивность, увеличьте количество повторений с 5 до 10, а затем до 12'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_arm_2.png')]
            },
            {
                description: 'Сидя: зрительно-моторная координация с теннисным мячом',
                instruction: ['Сядьте прямо на стул, ноги на полу','Возьмите теннисный мяч в правую руку, широко раскинув руки ладонями вперед', 'Соедините обе руки перед собой, перекладывая мяч из правой руки в левую перед грудью', 'Снова широко разведите руки, сводя лопатки вместе', 'Выполните 1–20 повторений'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/multipleSclerosis_arm_3.png')]
            },
    ]},
    {
        pathology: Pathology.SPINAL_CORD_INJURE,
        bodyPart: BodyPart.LEG,
        exercises: [
            {
                description: 'Колени к груди',
                instruction: ['Положите одну руку на верхнюю часть ноги чуть выше колена и на противоположную ногу',' Согните одно колено так, чтобы оно касалось груди', 'Затем опустите ногу и выпрямите колено'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/spinalCordInjure_leg_1.png')]
            },
            {
                description: 'Маршируем сидя ',
                instruction: ['Сядьте на край сиденья, поставив обе ступни на землю, затем поочередно поднимайте колени по одному','Это упражнение для ног позволяет практиковать движения, используемые при ходьбе, без дополнительной нагрузки на суставы'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/spinalCordInjure_leg_2.png')]
            },
            {
                description: 'Подъемы прямых ног',
                instruction: ['Лягте, выпрямив ноги, и поднимите одну ногу, не сгибая в коленях','Когда нога окажется максимально высоко, задержитесь на несколько секунд. Опустите ногу и чередуйте с другой ногой', 'Постарайтесь задействовать корпус во время выполнения этого упражнения, чтобы избежать чрезмерной нагрузки на нижнюю часть спины.'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/spinalCordInjure_leg_3.png')]
            },
    ]},
    {
        pathology: Pathology.SPINAL_CORD_INJURE,
        bodyPart: BodyPart.ARM,
        exercises: [
            {
                description: '“О” и кулаки (верхние конечности)',
                instruction: ['Используя одну или обе руки, поочередно постукивайте кончиками каждого пальца по большому','После прикосновения к каждому пальцу можно также добавить сжатие руки в кулак', 'Задержитесь на несколько секунд или столько, сколько сможете, и снова выпрямите пальцы'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/spinalCordInjure_arm_1.png') ]
            },
            {
                description: 'Сгибание и разгибание запястья',
                instruction: ['Положите предплечье на стол, положив руку на край. Аккуратно согните запястье полностью вверх (т. е. разгибание запястья) и вниз (т. е. сгибание запястья). Вы можете усложнить это упражнение, взяв в руки легкий вес; хорошо подойдет бутылка с водой или банка фасоли.','Если вы еще не можете поднять запястье против силы тяжести, поверните предплечье так, чтобы сгибать и разгибать запястье в стороны вперед и назад. Это упражнение помогает улучшить гибкость запястья, что необходимо для увеличения подвижности и диапазона движений рук.'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/spinalCordInjure_arm_2.png') ]
            },
            {
                description: 'Поворот кистей',
                instruction: ['Для этого упражнения возьмите руку и положите ее на стол ладонью вверх (т. е. супинация)','Затем другой рукой поверните ладонь вниз (т. е. пронацию)', 'Повторение этого упражнения может помочь улучшить подвижность рук и запястий(старайтесь не скручивать и не поворачивать плечо и тело для компенсации)'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/spinalCordInjure_arm_2.png') ]
            },
    ]},
    {
        pathology: Pathology.STROKE,
        bodyPart: BodyPart.LEG,
        exercises: [
            {
                description: 'Переступая через препятствия',
                instruction: ['Поставьте две бутылки на расстоянии 1,5 метра','пройдите над бутылками гемиплегичной ногой'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/stroke_leg_1.png')]
            },
            {
                description: 'Движение ног назад',
                instruction: ['Вставьте напротив стены, опирайтесь своими руками на стену','Отводите гемиплегичную ногу назад, не ставьте ног на пол и начните снова'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/stroke_leg_2.png')]
            },
            {
                description: 'Растяжка ног',
                instruction: ['Поставьте два стула напротив и вытяните свою гемиплегичную ногу на стуле','Нажмите на колено своей здоровой рукой', 'Наклонитесь вперед, не сгибая  ваше колено. оставайтесь в этом позиции'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/stroke_leg_3.png')]
            },
    ]},
    {
        pathology: Pathology.STROKE,
        bodyPart: BodyPart.ARM,
        exercises: [
            {
                description: 'Передвигаем бутылку',
                instruction: ['Поместите полную бутылку рядом со стоящей коробкой','Передавайте бутылку другой руке над коробкой', 'Поставьте бутылку и повторите то же движение в противоположном направлении'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/stroke_arm_1.png') ]
            },
            {
                description: 'Подъем предмета',
                instruction: ['Держите полную бутылку в обеих руках','Поднимите бутылку на максимально возможную высоту', 'Поставьте бутылку снова на стол'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/stroke_arm_2.png')]
            },
            {
                description: 'Упражнение на растяжку',
                instruction: ['Захватите гемиплегичное запястье с другой стороны','Отводите свою гемиплегичную руку с помощью помощью другой руки', 'Оставайтесь в этой позиции'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/stroke_arm_3.png') ]
            },
    ]},
    {
        pathology: Pathology.TRAUMATIC_BRAIN_INJURY,
        bodyPart: BodyPart.LEG,
        exercises: [
            {
                description: 'Отведение/приведение бедра сидя',
                instruction: ['Начните с того, что сядьте на стул и держите одну ногу немного выше пола.','Затем медленно отведите ногу в сторону, насколько сможете, а затем внутрь к средней линии', 'Стремитесь к 3 подходам по 10 повторений на каждую сторону'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/traumaticBrainInjury_leg_1.png') ]
            },
            {
                description: 'Маршируем сидя',
                instruction: ['Выполняется в сидячем положении с сохранением высокой вертикальной осанки','Сначала поднимите колено к груди и задержитесь на 1-2 секунды. Затем медленно опустите его обратно', 'Повторите чередование сторон в общей сложности 20 повторений', 'Это можно делать пассивно, используя руки, или активно, используя только силу ног'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/traumaticBrainInjury_leg_2.png') ]
            },
            {
                description: 'Подъем прямых ног',
                instruction: ['Лягте на спину на пол или на кровать, согнув одно колено','Другой ногой выпрямите колено и поднимите ногу вверх', 'Обязательно держите колено полностью прямым, напрягая мышцы бедра, когда поднимаете и опускаете ногу', 'Следует сделать 3 подхода по 10 повторений на каждую ногу'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/traumaticBrainInjury_leg_3.png')]
            },
    ]},
    {
        pathology: Pathology.TRAUMATIC_BRAIN_INJURY,
        bodyPart: BodyPart.ARM,
        exercises: [
            {
                description: 'Толкающее движение ',
                instruction: ['Поставьте бутылку с водой слева от стола в пределах диапазона движения','Затем сцепите запястье с внешней стороны бутылки и рукой медленно протолкните ее прямо через стол', 'Таким же движением отодвиньте бутылку назад в противоположном направлении', 'Повторите по 10 раз на каждую руку'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/traumaticBrainInjury_arm_1.png')]
            },
            {
                description: 'Бицепс скручивания',
                instruction: ['Для этого упражнения на ЧМТ держите в руке бутылку с водой и положите руку рядом с собой','Затем, прижав локоть к боку, согните бицепс, чтобы поднести бутылку с водой к плечу', 'Наконец, как можно медленнее опустите руку', 'Медленно выполняя упражнение, вы развиваете больше контроля и стабильности. Повторить по 10 раз на каждую сторону'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/traumaticBrainInjury_arm_2.png')]
            },
            {
                description: 'Сгибание плеча',
                instruction: ['Сначала возьмите бутылку с водой и положите руку на колени','Затем поднимите руку под углом 90 градусов перед собой, пока она не окажется на уровне ваших глаз (убедитесь, что ваша рука полностью выпрямлена)', 'Задержитесь примерно на 5 секунд, затем медленно опустите руку на колени', 'Повторите по 10 раз на каждую руку'],
                images: [require('../descriptionOfExercises/ImagesOfExercise/traumaticBrainInjury_arm_3.png') ]
            },
    ]},
]