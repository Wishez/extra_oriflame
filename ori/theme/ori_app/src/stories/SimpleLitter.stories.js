import Vue from 'vue';

import {
	storiesOf
} from '@storybook/vue';


storiesOf('Simple Litter', module)
	.add('Подложка для контента',
		() =>
		({
			template: `<div class="parent centered simpleWrapper">
					<simple-litter>
						<h2 class="marginBottom_18">Фиш контент!</h2>
						<p>Товарищи! Новая модель организационной деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.Задача организации, в особенности же начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации дальнейших направлений развития.Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.</p>

						<p>Не следует, однако забывать, что укрепление и развитие структуры требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач.Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют определения и уточнения систем массового участия.</p>

						<p>С другой стороны постоянное информационно - пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу(специалистов) участие в формировании новых предложений.С другой стороны укрепление и развитие структуры представляет собой интересный эксперимент проверки форм развития.Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требуют от нас анализа систем массового участия.Таким образом постоянное информационно - пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу(специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям.Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа дальнейших направлений развития.Таким образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу(специалистов) участие в формировании форм развития.</p>
        	</simple-litter>
  		</div>`
		})
	);
