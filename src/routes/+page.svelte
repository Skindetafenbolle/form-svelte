<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const form = document.forms.myForm;
		const btnSend = window.buttonSend;
		const formCheckbox = window.showForm;
		const switchLanguages = window.formLanguages;

		window.addEventListener('load', (e) => {
			btnSend.addEventListener('click', sendForm);

			btnSend.addEventListener('click', checkForm);
			// workPageLanguage();
			formShow();
			workSectionNetwor();
			workSectionCommunication();
			workSectionWorkLike();
			workSectionOperatingMode();
		});

		function formShow() {
			window.addEventListener('resize', (e) => {
				const formHeight = form.scrollHeight;
				form.style.height = `${formHeight}px`;
			});

			formCheckbox.addEventListener('input', (e) => {
				const formHeight = form.scrollHeight;
				if (e.target.checked) {
					form.style.height = `${formHeight}px`;
				} else {
					form.style.height = '0';
				}
			});
		}

		function workSectionOperatingMode() {
			const container = window.formWorkMode;
			const checkbox = window.workModeShow;
			const content = container.querySelector('.form__work-mode-items');

			checkbox.addEventListener('input', (e) => {
				const heightContent = content.scrollHeight;
				if (e.target.checked) {
					content.style.maxHeight = `${heightContent}px`;
					form.style.height = `${form.scrollHeight + heightContent}px`;
				} else {
					content.style.maxHeight = `0`;
					form.style.height = `${form.scrollHeight - heightContent}px`;
				}
			});
		}

		function workSectionWorkLike() {
			const radios = workLike.querySelectorAll('input[type="radio"]');
			const inputs = workLike.querySelectorAll('input[type="number"]');

			radios.forEach((radio, i) =>
				radio.addEventListener('input', (e) => {
					if (radio.checked) {
						inputs[i].setAttribute('required', true);
						if (radio == radios[0]) {
							inputs[1].removeAttribute('required');
							inputs[1].classList.remove('invalid-input');
						} else {
							inputs[0].removeAttribute('required');
							inputs[0].classList.remove('invalid-input');
						}
					}
				})
			);
		}

		function sendForm(e) {
			let formData = getFormData();

			function getFormData() {
				const contents = getDataFromContents('formContacts');
				const workLike = getWorkLike('workLike');
				const networkLinks = getLinkForNetwork('formNetwork');
				const workDays = getWorkMode('formWorkMode');
				const calendar = window.inputLinkCalendar.value;
				const languages = getCommunicationLanguages('communicationLanguages');
				const survey = getPollResponse('formSurvey');
				const confirmation = window.formConfirmation.checked;

				return {};

				function getDataFromContents(id) {
					const container = form.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');

					return {
						name: inputs[0].value,
						address: inputs[1].value,
						tell: inputs[2].value,
						mail: inputs[3].value
					};
				}

				function getWorkLike(id) {
					const container = form.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');

					return {
						workPhysical: inputs[0].checked,
						workCompany: inputs[2].checked,
						nip: inputs[2].checked ? inputs[3].value : '',
						pesel: inputs[0].checked ? inputs[1].value : ''
					};
				}

				function getLinkForNetwork(id) {
					const container = form.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');

					return {
						instagram: inputs[0].checked ? inputs[1].value : '',
						facebook: inputs[2].checked ? inputs[3].value : '',
						telegram: inputs[4].checked ? inputs[5].value : '',
						tiktok: inputs[6].checked ? inputs[7].value : '',
						linkedin: inputs[8].checked ? inputs[9].value : ''
					};
				}

				function getWorkMode(id) {
					const container = form.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');
					const getData = (id) =>
						inputs[id].checked ? [inputs[id + 1].value, inputs[id + 2].value] : '';

					return {
						monday: getData(1),
						Tuesday: getData(4),
						Wednesday: getData(7),
						Thursday: getData(10),
						Friday: getData(13),
						Saturday: getData(16),
						Sunday: getData(19)
					};
				}

				function getCommunicationLanguages(id) {
					const container = form.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');
					const getData = (id) =>
						inputs[id].checked
							? inputs[id]
									.closest('.form__languages-item')
									.querySelector('.form__languages-item-text').textContent
							: '';

					return {
						polski: getData(0),
						belarusian: getData(1),
						ukrainian: getData(2),
						russian: getData(3),
						english: getData(4),
						another: inputs[5].checked
							? inputs[5]
									.closest('.form__languages-another')
									.querySelector('.form__languages-item-another-input').value
							: ''
					};
				}

				function getPollResponse(id) {
					const container = form.querySelector(`#${id}`);
					const inputs = container.querySelectorAll('input');

					return {
						ecofriendly: inputs[0].checked,
						petfriendly: inputs[1].checked,
						childefriendly: inputs[2].checked,
						inclusive: inputs[3].checked
					};
				}
			}
		}

		function workSectionNetwor() {
			let networkContainer = form.querySelector('#formNetwork');
			let networkItems = networkContainer.querySelectorAll('.form__network-item-checkbox');
			networkItems.forEach((item) =>
				item.addEventListener('input', (e) => {
					const checkbox = e.target;
					const item = checkbox.closest('.form__network-item');
					const input = item.querySelector('.form__network-item-input');
					input.disabled = !checkbox.checked;
				})
			);
		}

		function workSectionCommunication() {
			const checkboxLangAnother = window.communicationLanguages.querySelector(
				'.form__languages-item-another-checkbox'
			);
			checkboxLangAnother.addEventListener('input', (e) => {
				const checkbox = e.target;
				const item = checkbox.closest('.form__languages-another');
				const input = item.querySelector('.form__input');
				input.disabled = !checkbox.checked;
			});
		}

		function checkForm() {
			let inputs = document.querySelectorAll('input[required]');
			inputs.forEach((el) => {
				if (el.type == 'checkbox') {
					if (!el.checked) {
						el.classList.add('invalid-checkbox');
					} else {
						el.classList.remove('invalid-checkbox');
					}
				} else {
					if (el.value == '') {
						el.classList.add('invalid-input');
					} else {
						el.classList.remove('invalid-input');
					}
				}
			});
		}

		// function workPageLanguage() {
		// 	let language = startPageLanguage();
		// 	switchLanguages.addEventListener('input', changeSelectLanguages);

		// 	function changeSelectLanguages(e) {
		// 		const select = e.target;
		// 		const language = select.options[select.selectedIndex].value;
		// 		// changeContent(language)
		// 		i18next.changeLanguage(language);
		// 	}

		// 	function startPageLanguage() {
		// 		const language = getPageLanguage();
		// 		i18next.changeLanguage(language);
		// 		switchLanguages.value = language;

		// 		function getPageLanguage() {
		// 			const browserLanguage = window.navigator.language;
		// 			const availableLanguages = getLanguages();
		// 			const language = availableLanguages.find((el) => el == browserLanguage) ?? 'en';

		// 			function getLanguages() {
		// 				const options = switchLanguages.querySelectorAll('option');
		// 				let optionsValue = [];
		// 				options.forEach((el) => optionsValue.push(el.value));
		// 				return optionsValue;
		// 			}

		// 			return language;
		// 		}
		// 	}

		// 	// function changeContent(language) {

		// 	// 	// const elements = document
		// 	// 	// 	.querySelectorAll(`[data-content-${language}]`)
		// 	// 	// 	.forEach(
		// 	// 	// 		(el) =>
		// 	// 	// 			(el.textContent =
		// 	// 	// 				language == 'ru'
		// 	// 	// 					? el.dataset.contentRu
		// 	// 	// 					: language == 'pl'
		// 	// 	// 					? el.dataset.contentPl
		// 	// 	// 					: el.dataset.contentEn)
		// 	// 	// 	)
		// 	// 	// const elements = document
		// 	// 	// 	.querySelectorAll(`[data-placeholder-${language}]`)
		// 	// 	// 	.forEach(
		// 	// 	// 		(el) =>
		// 	// 	// 			(el.placeholder =
		// 	// 	// 				language == 'ru'
		// 	// 	// 					? el.dataset.placeholderRu
		// 	// 	// 					: language == 'pl'
		// 	// 	// 					? el.dataset.placeholderPl
		// 	// 	// 					: el.dataset.placeholderEn)
		// 	// 	// 	)
		// 	// 	// form.style.height = `${form.scrollHeight}px`
		// 	// }
		// }
	});
</script>

<div class="main-background">
	<header class="header">
		<div class="header__inner">
			<div class="header__content">
				<div class="header__logo">YOOHIVE</div>
				<div class="header__language">
					<select class="header__language-select" name="" id="formLanguages">
						<option class="header__language-option" value="ru"> ru </option>
						<option class="header__language-option" value="en"> en </option>
						<option class="header__language-option" value="pl"> pl </option>
					</select>
				</div>
			</div>
		</div>
	</header>
	<main class="page">
		<div class="page__content">
			<div class="message">
				<input type="checkbox" id="showForm" />
				<div class="message__inner">
					<h2
						id="title"
						class="message__title"
						data-content-ru="Сейчас сервис не работает"
						data-content-en="The service is not working right now"
					>
						The service is not working right now
					</h2>
					<p
						id="description"
						class="message__description"
						data-content-en="We are like bees working to start our hive
						ju-ju-ju. For now you can register on our
						website to get maximum effect for your
						business."
						data-content-ru="Мы как пчелки работаем над запуском нашего улья
						жу-жу-жу. Пока вы можете зарегистрироваться на нашем
						сайте, чтобы получить максимальный эффект для вашего
						бизнеса."
					>
						We are like bees working to start our hive ju-ju-ju. For now you can register on our
						website to get maximum effect for your business.
					</p>
					<label
						for="showForm"
						class="message__button button"
						data-content-en="Registration"
						data-content-ru="Зарегистрироваться"
					>
						Registration
					</label>
				</div>
				<form action="" class="form" name="myForm">
					<div class="form__inner">
						<div class="form__header">
							<h2
								class="form__header-title"
								data-content-ru="Регистрация"
								data-content-en="Registration"
							>
								Регистрация
							</h2>
						</div>
						<div class="form__content">
							<div class="form__contacts" id="formContacts">
								<div class="form__contacts-item">
									<div class="form__contacts-item-header input-name">
										<p
											class="form__contacts-item-text"
											data-content-ru="Название компании/мастера"
											data-content-en="Company/craftsman name"
										>
											Название компании/мастера
										</p>
										<span class="form__required">*</span>
									</div>

									<input
										type="text"
										class="form__contacts-item-input form__input"
										data-placeholder-en="Company name"
										data-placeholder-ru="Название компании"
										placeholder="Company name"
										required
									/>
								</div>

								<div class="form__contacts-items">
									<div class="form__contacts-item">
										<div class="form__contacts-item-header">
											<p
												class="form__contacts-item-text input-name"
												data-content-ru="Адрес"
												data-content-en="Address"
											>
												Адрес
											</p>
										</div>

										<input
											type="text"
											class="form__contacts-item-input form__input"
											data-placeholder-en="Address"
											data-placeholder-ru="Адрес"
											placeholder="Address"
										/>
									</div>
									<div class="form__contacts-item">
										<div class="form__contacts-item-header input-name">
											<p
												class="form__contacts-item-text"
												data-content-ru="Телефон"
												data-content-en="Telephone"
											>
												Телефон
											</p>
											<span class="form__required">*</span>
										</div>

										<input
											type="tel"
											class="form__contacts-item-input form__input"
											data-placeholder-en="Phone number"
											data-placeholder-ru="Номер телефона"
											placeholder="Phone number"
											required
										/>
									</div>
								</div>

								<div class="form__contacts-item">
									<div class="form__contacts-item-header input-name">
										<p
											class="form__contacts-item-text input-name"
											data-content-ru="Email"
											data-content-en="Email"
										>
											Email
										</p>
										<span class="form__required">*</span>
									</div>

									<input
										type="email"
										class="form__contacts-item-input form__input"
										data-placeholder-en="Email"
										data-placeholder-ru="Email"
										placeholder="Email"
										required
									/>
								</div>
							</div>

							<div class="form__work-like" id="workLike">
								<div class="form__work-like-header">
									<p
										class="form__work-like-text section-name"
										data-content-ru="Вы работаете как:"
										data-content-en="You work like:"
									>
										You work like:
									</p>
									<span class="form__required">*</span>
								</div>

								<div class="form__work-like-content">
									<div class="form__work-like-items">
										<div class="form__work-like-item">
											<input
												class="form__work-like-radio custom-radio"
												type="radio"
												name="workLike"
												id="workLikePhysical"
												required
											/>
											<label for="workLikePhysical" class="form__work-like-label">
												<span
													class="form__work-like-content-text form__text"
													data-content-ru="Физ. лицо"
													data-content-en="Physical person"
												>
													Физ. лицо
												</span>
											</label>
											<div class="form__work-like-input-container" id="data">
												<p class="form__work-like-input-text">PESEL</p>
												<input
													class="form__work-like-input form__input"
													type="number"
													data-placeholder-en="Enter 11 numbers"
													data-placeholder-ru="Введите 11 цифр"
													placeholder="Enter 11 numbers"
												/>
											</div>
										</div>
										<div class="form__work-like-item">
											<input
												class="form__work-like-radio custom-radio"
												type="radio"
												name="workLike"
												id="workLikeCompany"
											/>
											<label for="workLikeCompany" class="form__work-like-label">
												<span
													class="form__work-like-content-text form__text"
													data-content-ru="Компания"
													data-content-en="Company"
												>
													Компания
												</span>
											</label>
											<div class="form__work-like-input-container" id="data">
												<p class="form__work-like-input-text">NIP</p>
												<input
													class="form__work-like-input form__input"
													type="number"
													data-placeholder-en="Enter 10 numbers"
													data-placeholder-ru="Введите 10 цифр"
													placeholder="Enter 10 numbers"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="form__network" id="formNetwork">
								<p
									class="form__network-text section-name"
									data-content-ru="Соцсети"
									data-content-en="Social network"
								>
									соцсети
								</p>
								<div class="form__network-items" id="networkContainer">
									<div class="form__network-item">
										<label class="form__network-item-container">
											<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />

											<span class="form__network-item-text form__text">Instagram</span>
										</label>
										<input
											type="text"
											class="form__network-item-input form__input"
											disabled
											data-placeholder-ru="Cсылка"
											data-placeholder-en="Link"
											placeholder="ссылка"
										/>
									</div>

									<div class="form__network-item">
										<label class="form__network-item-container">
											<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />

											<span class="form__network-item-text form__text">Facebook</span>
										</label>
										<input
											type="text"
											class="form__network-item-input form__input"
											disabled
											data-placeholder-ru="Cсылка"
											data-placeholder-en="Link"
											placeholder="ссылка"
										/>
									</div>

									<div class="form__network-item">
										<label class="form__network-item-container">
											<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />

											<span class="form__network-item-text form__text">Telegram</span>
										</label>
										<input
											type="text"
											class="form__network-item-input form__input"
											disabled
											data-placeholder-ru="Cсылка"
											data-placeholder-en="Link"
											placeholder="ссылка"
										/>
									</div>

									<div class="form__network-item">
										<label class="form__network-item-container">
											<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />

											<span class="form__network-item-text form__text">Tiktok</span>
										</label>
										<input
											type="text"
											class="form__network-item-input form__input"
											disabled
											data-placeholder-ru="Cсылка"
											data-placeholder-en="Link"
											placeholder="ссылка"
										/>
									</div>

									<div class="form__network-item">
										<label class="form__network-item-container">
											<input class="form__network-item-checkbox custom-checkbox" type="checkbox" />

											<span class="form__network-item-text form__text">Linkedin</span>
										</label>
										<input
											type="text"
											class="form__network-item-input form__input"
											disabled
											data-placeholder-ru="Cсылка"
											data-placeholder-en="Link"
											placeholder="ссылка"
										/>
									</div>
								</div>
							</div>

							<div class="form__work-mode" id="formWorkMode">
								<input type="checkbox" class="form__checkbox" id="workModeShow" />
								<label for="workModeShow" class="form__work-mode-header">
									<span
										class="form__work-mode-header-text"
										data-content-ru="Режим работы"
										data-content-en="Оperating mode"
									>
										Оperating mode
									</span>
									<span class="form__work-mode-header-icon">
										<svg viewBox="0 0 24 24" fill="none">
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M16.5303 14.0303C16.2374 14.3232 15.7626 14.3232 15.4697 14.0303L12 10.5607L8.53033 14.0303C8.23744 14.3232 7.76256 14.3232 7.46967 14.0303C7.17678 13.7374 7.17678 13.2626 7.46967 12.9697L11.4697 8.96967C11.7626 8.67678 12.2374 8.67678 12.5303 8.96967L16.5303 12.9697C16.8232 13.2626 16.8232 13.7374 16.5303 14.0303Z"
												fill="black"
											/>
										</svg>
									</span>
								</label>
								<div class="form__work-mode-items">
									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span
												class="form__work-mode-item-text"
												data-content-ru="Понедельник"
												data-content-en="Monday"
											>
												Monday
											</span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время открытия"
													data-content-en="Open Time"
												>
													Open Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время закрытия"
													data-content-en="Close Time"
												>
													Close Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div for="workModeMonday" class="form__work-mode-item-info">
											<span
												class="form__work-mode-item-text"
												data-content-ru="Вторник"
												data-content-en="Tuesday"
											>
												Tuesday
											</span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время открытия"
													data-content-en="Open Time"
												>
													Open Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время закрытия"
													data-content-en="Close Time"
												>
													Close Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span
												class="form__work-mode-item-text"
												data-content-ru="Среда"
												data-content-en="Wednesday"
											>
												Wednesday
											</span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время открытия"
													data-content-en="Open Time"
												>
													Open Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время закрытия"
													data-content-en="Close Time"
												>
													Close Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span
												class="form__work-mode-item-text"
												data-content-ru="Четверг"
												data-content-en="Thursday"
											>
												Thursday
											</span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время открытия"
													data-content-en="Open Time"
												>
													Open Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время закрытия"
													data-content-en="Close Time"
												>
													Close Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span
												class="form__work-mode-item-text"
												data-content-ru="Пятница"
												data-content-en="Friday"
											>
												Friday
											</span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время открытия"
													data-content-en="Open Time"
												>
													Open Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время закрытия"
													data-content-en="Close Time"
												>
													Close Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span
												class="form__work-mode-item-text"
												data-content-ru="Суббота"
												data-content-en="Saturday"
											>
												Saturday
											</span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время открытия"
													data-content-en="Open Time"
												>
													Open Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время закрытия"
													data-content-en="Close Time"
												>
													Close Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span
												class="form__work-mode-item-text"
												data-content-ru="Воскресенье"
												data-content-en="Sunday"
											>
												Sunday
											</span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время открытия"
													data-content-en="Open Time"
												>
													Open Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span
													class="form__work-mode-item-content-line-text"
													data-content-ru="Время закрытия"
													data-content-en="Close Time"
												>
													Close Time
												</span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="form__calendar">
								<p
									class="form__calendar-text section-name"
									data-content-ru="Ссылка на Гугл календарь"
									data-content-en="Link to Google calendar"
								>
									Ссылка на Гугл календарь
								</p>
								<input
									id="inputLinkCalendar"
									type="url"
									class="form__calendar-input form__input"
									data-placeholder-ru="Ссылка на Гугл календарь"
									data-placeholder-en="link to Google calendar"
									placeholder="ссылка на Гугл календарь"
								/>
							</div>

							<div class="form__languages-container" id="communicationLanguages">
								<p
									class="form__languages-text section-name"
									data-content-ru="Языки комуникациии"
									data-content-en="Communication languages"
								>
									Языки комуникациии
								</p>
								<div class="form__languages-items">
									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-image">
											<span class="form__languages-item-image-shadow"></span>
											<img src="/img/flag-poland.webp" alt="" />
										</span>
										<span class="form__languages-item-text form__text">Polski</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-image">
											<span class="form__languages-item-image-shadow"></span>
											<img src="/img/flag-belarus.webp" alt="" />
										</span>
										<span class="form__languages-item-text form__text">Беларуская</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-image">
											<span class="form__languages-item-image-shadow"></span>
											<img src="/img/flag-ukraine.webp" alt="" />
										</span>
										<span class="form__languages-item-text form__text">Українська</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-image">
											<span class="form__languages-item-image-shadow"></span>
											<img src="/img/flag-russian.webp" alt="" />
										</span>
										<span class="form__languages-item-text form__text">Русский</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-image">
											<span class="form__languages-item-image-shadow"></span>
											<img src="/img/flag-england.webp" alt="" />
										</span>
										<span class="form__languages-item-text form__text">English</span>
									</label>
								</div>

								<div class="form__languages-another">
									<label class="form__languages-item-another">
										<input
											type="checkbox"
											class="form__languages-item-another-checkbox form__languages-item-checkbox custom-checkbox"
										/>
										<span
											class="form__languages-item-text form__text"
											data-content-en="Another"
											data-content-ru="Другой">Another</span
										>
									</label>
									<input
										class="form__languages-item-another-input form__input"
										type="text"
										disabled
										data-placeholder-en="Enter other languages"
										data-placeholder-ru="Введите другие языки"
										placeholder="Enter other languages"
									/>
								</div>
							</div>

							<div class="form__preferences" id="formSurvey">
								<p
									class="form__preferences-text form__text"
									data-content-ru="Выберите к какой категории соответствует ваша компания (можно выбрать несколько вариантов):"
									data-content-en="Select which category your company belongs to (you can select several options):"
								>
									Select which category your company belongs to (you can select several options):
								</p>

								<div class="form__preferences-items">
									<label class="form__preferences-item">
										<input
											class="form__preferences-item-checkbox custom-checkbox"
											type="checkbox"
											name="preferences"
											value="ecofriendly"
										/>
										<span class="form__preferences-item-text form__text">ecofriendly</span>
									</label>

									<label class="form__preferences-item">
										<input
											class="form__preferences-item-checkbox custom-checkbox"
											type="checkbox"
											name="preferences"
											value="ecofriendly"
										/>
										<span class="form__preferences-item-text form__text">petfriendly</span>
									</label>

									<label class="form__preferences-item">
										<input
											class="form__preferences-item-checkbox custom-checkbox"
											type="checkbox"
											name="preferences"
											value="ecofriendly"
										/>
										<span class="form__preferences-item-text form__text">childefriendly</span>
									</label>

									<label class="form__preferences-item">
										<input
											class="form__preferences-item-checkbox custom-checkbox"
											type="checkbox"
											name="preferences"
											value="ecofriendly"
										/>
										<span class="form__preferences-item-text form__text">inclusive</span>
									</label>
								</div>
							</div>

							<label class="form__confirmation" id="formConfirmation">
								<input
									class="form__confirmation-checkbox custom-checkbox"
									type="checkbox"
									required
								/>
								<div class="form__confirmation-text-container">
									<span
										class="form__confirmation-text"
										data-content-ru="Даю согласие на публикацию предоставленных данных на ресурсах YOOHIVE.COM (бот, сайт, соцсети)"
										data-content-en="I agree to the publication of the provided data on YOOHIVE.COM resources (bot, website, social network)"
									>
										I agree to the publication of the provided data on YOOHIVE.COM resources (bot,
										website, social network)
									</span>
									<span class="form__required">*</span>
								</div>
							</label>

							<button
								class="button"
								id="buttonSend"
								data-content-en="Registration"
								data-content-ru="Регистрация"
							>
								Registration
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</main>
	<footer class="footer">
		<div class="footer__inner">
			<p class="footer__text">© 2024 YOOHIVE All Rights Reserved</p>
		</div>
	</footer>
</div>

<style>
	.page {
		flex: content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10vw 0;
	}

	.page__content {
		position: relative;
		z-index: 2;
	}

	.message {
		display: flex;
		flex-direction: column;
		gap: 50px;
		width: 100%;
		max-width: 800px;
		border-radius: 20px;
		overflow: hidden;
		background: var(--color-bg-primary);
		border: var(--border-primary);
	}
	@media (min-width: 600px) {
		.message {
			padding: 60px 20px;
		}
	}
	@media (max-width: 600px) {
		.message {
			padding: 50px 10px;
		}
	}

	.message__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.message__title {
		font-size: 30px;
		font-weight: 700;
		text-align: center;
		color: var(--color-text-primary);
	}
	.message__description {
		display: block;
		font-size: 20px;
		font-weight: 500;
		text-align: center;
		color: var(--color-text-primary);
	}

	.message__button {
	}

	#showForm {
		display: none;
	}
	#showForm:checked ~ .form {
		display: flex;
		max-height: 100%;
	}

	#showForm:checked ~ .message__inner > .message__button {
		display: none;
	}

	.form__required {
		font-size: inherit;
		color: red;
	}

	.form {
		max-height: 0;
		display: none;
		flex-direction: column;
		gap: 15px;
		max-width: 800px;
		transition: all 0.5s;
	}
	.form__inner {
	}

	.form__content {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	/* header */

	.form__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 30px;
	}

	.form__header-title {
		font-weight: 700;
		font-size: 34px;
		text-align: center;
		color: var(--color-text-primary);
	}

	/* contacts */

	.form__contacts {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.form__contacts-items {
		display: flex;
		gap: 20px;
	}

	@media (max-width: 600px) {
		.form__contacts-items {
			flex-direction: column;
		}
	}

	.form__contacts-item {
		width: 100%;
	}
	.form__contacts-item-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 8px;
	}
	.form__contacts-item-text {
		color: var(--color-text-primary);
	}

	/* work-like */

	.form__work-like-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
	}

	.form__work-like-items {
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	.form__work-like-item {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 20px;
	}

	@media (max-width: 600px) {
		.form__work-like-item {
			flex-wrap: wrap;
		}
	}

	.form__work-like-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 20px;
	}

	.form__work-like-text {
		font-size: 20px;
		color: var(--color-text-primary);
	}

	.form__work-like-label {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}
	@media (max-width: 600px) {
		.form__work-like-label {
			flex: 1 0 auto;
			width: 80%;
		}
	}

	.form__work-like-radio {
	}

	.form__work-like-radio:checked ~ .form__work-like-input-container {
		opacity: 1;
		pointer-events: auto;
	}

	.form__work-like-content-text {
		font-weight: 18px;
		color: var(--color-text-primary);
	}

	.form__work-like-input-text {
		font-size: 20px;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.form__work-like-input-container {
		flex: content;
		display: flex;
		gap: 15px;
		opacity: 0.3;
		pointer-events: none;
	}

	@media (min-width: 600px) {
		.form__work-like-input-container {
			align-items: center;
			justify-content: end;
		}
	}

	@media (max-width: 600px) {
		.form__work-like-input-container {
			flex-direction: column;
		}
	}

	.form__work-like-input {
		width: 300px;
	}

	/* network */

	.form__network-text {
		font-size: 20px;
		margin-bottom: 10px;
		color: var(--color-text-primary);
	}

	.form__network-items {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.form__network-item {
		display: flex;
	}
	@media (max-width: 500px) {
		.form__network-item {
			flex-direction: column;
			column-gap: 20px;
		}
	}
	@media (min-width: 500px) {
		.form__network-item {
			align-items: center;
			justify-content: space-between;
			row-gap: 10px;
		}
	}

	.form__network-item-container {
		display: flex;
		align-items: center;
		cursor: pointer;
		min-height: 50px;
	}

	.form__network-item-checkbox {
		margin-right: 15px;
	}

	.form__network-item-text {
		font-size: 18px;
		color: var(--color-text-primary);
	}

	.form__network-item-input {
	}
	@media (min-width: 500px) {
		.form__network-item-input {
			max-width: 65%;
		}
	}

	/* calendar */

	.form__calendar {
	}

	.form__calendar-text {
		font-size: 20px;
		margin-bottom: 8px;
		color: var(--color-text-primary);
	}

	/* languages */

	.form__languages-text {
		font-size: 20px;
		margin-bottom: 8px;
		color: var(--color-text-primary);
	}

	.form__languages-items {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
		margin-bottom: 15px;
	}

	.form__languages-item {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.form__languages-item-checkbox {
		margin: 0 15px 0 0;
	}

	.form__languages-item-image {
		position: relative;
		display: inline-block;
		max-width: 30px;
		height: 30px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10px;
	}

	.form__languages-item-image-shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		box-shadow: inset 0 0 3px 0.5px #000000b6;
	}

	.form__languages-item-image-shadow::before,
	.form__languages-item-image-shadow::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform: scale(60%);
		overflow: hidden;
	}

	.form__languages-item-image-shadow::before {
		box-shadow: inset 0 7px 3px -5px #ffffffad;
	}

	.form__languages-item-image-shadow::after {
		box-shadow: inset 0 -6px 5px -4px #ffffff86;
	}

	.form__languages-item-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 50%;
	}

	.form__languages-item-text {
		color: var(--color-text-primary);
	}

	.form__languages-another {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.form__languages-item-another {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	/* preferences */

	.form__preferences {
	}
	.form__preferences-text {
		font-size: 18px;
		text-align: center;
		margin-bottom: 15px;
		color: var(--color-text-primary);
	}

	.form__preferences-items {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.form__preferences-item {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}

	.form__preferences-item-checkbox {
	}

	.form__preferences-item-text {
		font-size: 20px;
		color: var(--color-text-primary);
	}

	/* work-mode */

	.form__work-mode {
		display: flex;
		flex-direction: column;
		gap: 10px;
		overflow: hidden;
	}

	#workModeShow {
		display: none;
	}

	#workModeShow:checked ~ .form__work-mode-items {
		height: 100%;
	}

	#workModeShow:checked ~ .form__work-mode-header > .form__work-mode-header-icon {
		transform: rotate(180deg);
	}

	.form__work-mode-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 50px;
		background: var(--color-bg-secondary);
		padding: 10px;
		border-radius: 20px;
		cursor: pointer;
	}
	.form__work-mode-header-text {
		font-size: 20px;
		color: var(--color-text-primary);
	}

	.form__work-mode-header-icon {
		display: inline-block;
		max-width: 24px;
		max-height: 24px;
	}

	.form__work-mode-items {
		display: flex;
		flex-direction: column;
		gap: 5px;
		overflow: hidden;
		height: 0;
		max-height: 0;
		transition: all 0.5s;
	}

	.form__work-mode-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 10px;
		border-radius: 20px;
		background: var(--color-bg-secondary);
	}
	@media (max-width: 500px) {
		.form__work-mode-item {
			flex-wrap: wrap;
			row-gap: 10px;
		}
	}

	.form__work-mode-item-checkbox:checked ~ .form__work-mode-item-content,
	.form__work-mode-item-checkbox:checked ~ .form__work-mode-item-info {
		opacity: 1;
		pointer-events: auto;
	}

	.form__work-mode-item-checkbox {
		width: 20px;
		height: 20px;
		margin: 0 10px 0 0;
		cursor: pointer;
	}

	.form__work-mode-item-info {
		flex: content;
		display: inline-flex;
		align-items: center;
		margin-right: 15px;
		opacity: 0.3;
		pointer-events: none;
	}
	@media (min-width: 500px) {
		.form__work-mode-item-info {
			margin-right: 15px;
		}
	}

	.form__work-mode-item-info {
		color: var(--color-text-primary);
	}

	.form__work-mode-item-content {
		display: flex;
		column-gap: 15px;
		row-gap: 10px;
		flex-wrap: wrap;
		opacity: 0.3;
		pointer-events: none;
	}
	@media (min-width: 500px) {
		.form__work-mode-item-content {
			justify-content: end;
		}
	}
	@media (max-width: 500px) {
		.form__work-mode-item-content {
			justify-content: center;
		}
	}

	.form__work-mode-item-content-line {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.form__work-mode-item-content-line-text {
		text-align: end;
		color: var(--color-text-primary);
	}

	.form__work-mode-item-content-line-input {
		text-align: center;
		width: min-content;
		font-size: 18px;
		border: none;
		padding: 5px 10px;
		cursor: pointer;
	}

	/* confirmation */

	.form__confirmation {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}

	.form__confirmation-checkbox {
	}

	.form__confirmation-text-container {
		/* dis */
	}

	.form__confirmation-text {
		text-align: center;
		color: var(--color-text-primary);
	}

	:root {
		--color-text-primary: #331e09;
		--color-text-secondary: #ffffff;

		--color-border-primary: #000000;
		--color-border-secondary: #ffd883;
		--color-invalid: red;

		--color-bg-primary: #fff7d284;
		--color-bg-secondary: #ffffff;
		--color-bg-third: #fefbed84;
		--color-bg-button: #2f487e;

		--input-border: none;
		--input-bg: var(--color-bg-secondary);

		--border-primary: 1px solid var(--color-border-secondary);
	}

	.main-background {
		position: relative;
		background-image: url(img/honeycomb-background.avif);
	}
	.main-background::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #ffffffd5;
	}

	.form__input {
		display: block;
		width: 100%;
		padding: 15px 20px;
		font-size: 18px;
		border: var(--input-border);
		border-radius: 50px;
	}

	.button {
		padding: 20px 40px;
		font-size: 22px;
		max-width: 400px;
		margin: 0 auto;
		border-radius: 40px;
		border: none;
		background: var(--color-bg-button);
		cursor: pointer;
		color: var(--color-text-secondary);
		transition: 0.2s;
	}

	.button:hover {
		opacity: 0.9;
	}

	.input-name {
		font-weight: 500;
		font-size: 18px;
		/* color: red !important; */
	}

	.section-name {
		font-weight: 500;
		font-size: 20px;
		/* color: green !important; */
	}

	.form__text {
		font-size: 18px;
		/* color: orange !important; */
	}

	.custom-checkbox {
		min-width: 20px;
		min-height: 20px;
		margin: 0;
		cursor: pointer;
	}

	.custom-radio {
		min-width: 20px;
		min-height: 20px;
		margin: 0;
	}
	.invalid-input {
		border: 1px solid var(--color-invalid);
	}
	.invalid-checkbox {
		outline: 1px solid var(--color-invalid);
	}

	.footer {
		position: relative;
		z-index: 2;
	}
	.footer__inner {
		padding: 15px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-bg-third);
		border-radius: 50px;
		backdrop-filter: blur(5px);
		border: var(--border-primary);
	}
	@media (min-width: 600px) {
		.footer__inner {
			margin: 30px;
		}
	}

	@media (max-width: 600px) {
		.footer__inner {
			margin: 20px 10px;
		}
	}

	.footer__text {
		font-size: 18px;
		color: var(--color-text-primary);
	}

	.header {
		position: relative;
		z-index: 2;
	}

	.header__inner {
		padding: 10px 30px;
		/* margin: 30px; */
		border-radius: 50px;
		background: var(--color-bg-third);
		backdrop-filter: blur(5px);
		border: var(--border-primary);
	}

	@media (min-width: 600px) {
		.header__inner {
			margin: 30px;
		}
	}

	@media (max-width: 600px) {
		.header__inner {
			margin: 20px 10px;
		}
	}

	.header__content {
		align-items: center;
		justify-content: space-between;
		display: flex;
		gap: 15px;
	}

	.header__logo {
		font-size: 36px;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.header__language {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.header__language-text {
		font-size: 18px;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.header__language-select {
		border-radius: 30px;
		font-family: sans-serif;
		border: var(--border-primary);
		font-size: 18px;
		font-weight: 500;
		padding: 5px 10px;
		cursor: pointer;
		background: var(--color-bg-primary);
		color: var(--color-text-primary);
	}

	.header__language-option {
		font-size: 20px;
	}
</style>
