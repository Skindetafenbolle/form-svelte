<script>
	import i18next from 'i18next';
	import ru from '$lib/locales/ru.js';
	import en from '$lib/locales/en.js';
	import pl from '$lib/locales/pl.js';
	import ua from '$lib/locales/ua.js';
	import by from '$lib/locales/by.js';
	import { onMount } from 'svelte';

	onMount(() => {
		i18next.on('languageChanged', changeContent);
		function changeContent() {
			document.getElementById('title').textContent = i18next.t('message:title');
			document.getElementById('description').textContent = i18next.t('message:description');
			document.getElementById('message-button').textContent = i18next.t('message:button');
			document.querySelector('.form__header-title').textContent = i18next.t('form:title');
			contacts();
			workLike();
			network();
			workMode();
			calendar();
			communication();
			preference();
			formConfirmation();
			document.getElementById('buttonSend').textContent = i18next.t('form:button.text');

			function contacts() {
				const contacts = document.getElementById('formContacts');
				let items = contacts.querySelectorAll('.form__contacts-item-text');
				let inputs = contacts.querySelectorAll('input');

				items[0].textContent = i18next.t(`form:contacts.text`, { context: 'company' });
				items[1].textContent = i18next.t(`form:contacts.text`, { context: 'address' });
				items[2].textContent = i18next.t(`form:contacts.text`, { context: 'phone' });
				items[3].textContent = i18next.t(`form:contacts.text`, { context: 'email' });

				inputs[0].placeholder = i18next.t(`form:contacts.text`, { context: 'company' });
				inputs[1].placeholder = i18next.t(`form:contacts.text`, { context: 'address' });
				inputs[2].placeholder = i18next.t(`form:contacts.text`, { context: 'phone' });
				inputs[3].placeholder = i18next.t(`form:contacts.text`, { context: 'email' });
			}
			function workLike() {
				const container = document.getElementById('workLike');
				let items = container.querySelectorAll('.form__work-like-label');
				let inputs = container.querySelectorAll('.form__work-like-input');

				container.querySelector('.form__work-like-text').textContent = i18next.t('form:work.title');

				items[0].textContent = i18next.t(`form:work.text`, { context: 'physical' });
				items[1].textContent = i18next.t(`form:work.text`, { context: 'company' });

				inputs[0].placeholder = i18next.t(`form:work.input`, { context: 'physical' });
				inputs[1].placeholder = i18next.t(`form:work.input`, { context: 'company' });
			}
			function network() {
				const container = document.getElementById('formNetwork');
				let items = container.querySelectorAll('.form__network-item-text');
				let inputs = container.querySelectorAll('.form__network-item-input');

				container.querySelector('.form__network-text').textContent =
					i18next.t('form:network.title');

				items[0].textContent = i18next.t(`form:network.text`, { context: 'instagram' });
				items[1].textContent = i18next.t(`form:network.text`, { context: 'facebook' });
				items[2].textContent = i18next.t(`form:network.text`, { context: 'telegram' });
				items[3].textContent = i18next.t(`form:network.text`, { context: 'tiktok' });
				items[4].textContent = i18next.t(`form:network.text`, { context: 'linkedin' });

				inputs[0].placeholder = i18next.t(`form:network.placeholder`, { context: 'instagram' });
				inputs[1].placeholder = i18next.t(`form:network.placeholder`, { context: 'facebook' });
				inputs[2].placeholder = i18next.t(`form:network.placeholder`, { context: 'telegram' });
				inputs[3].placeholder = i18next.t(`form:network.placeholder`, { context: 'tiktok' });
				inputs[4].placeholder = i18next.t(`form:network.placeholder`, { context: 'linkedin' });
			}
			function workMode() {
				const container = document.getElementById('formWorkMode');
				let items = container.querySelectorAll('.form__work-mode-item');
				let days = container.querySelectorAll('.form__work-mode-item-text');

				container.querySelector('.form__work-mode-header-text').textContent =
					i18next.t('form:workMode.title');

				days[0].textContent = i18next.t(`form:workMode.day`, { context: 'monday' });
				days[1].textContent = i18next.t(`form:workMode.day`, { context: 'tuesday' });
				days[2].textContent = i18next.t(`form:workMode.day`, { context: 'wednesday' });
				days[3].textContent = i18next.t(`form:workMode.day`, { context: 'thursday' });
				days[4].textContent = i18next.t(`form:workMode.day`, { context: 'friday' });
				days[5].textContent = i18next.t(`form:workMode.day`, { context: 'saturday' });
				days[6].textContent = i18next.t(`form:workMode.day`, { context: 'sunday' });

				items.forEach((el) => {
					let times = el.querySelectorAll('.form__work-mode-item-content-line-text');
					times[0].textContent = i18next.t(`form:workMode.time`, { context: 'open' });
					times[1].textContent = i18next.t(`form:workMode.time`, { context: 'close' });
				});
			}
			function calendar() {
				const container = document.getElementById('formLinkCalendar');
				let text = container.querySelector('.form__calendar-text');
				let input = container.querySelector('.form__calendar-input');

				text.textContent = i18next.t(`form:calendar.text`);
				input.placeholder = i18next.t(`form:calendar.placeholder`);
			}
			function communication() {
				const container = document.getElementById('communicationLanguages');

				container.querySelector('.form__languages-text').textContent =
					i18next.t(`form:communication.title`);

				container.querySelector('.form__languages-item-another-text').textContent = i18next.t(
					`form:communication.another`,
					{ context: 'text' }
				);

				container.querySelector('.form__languages-item-another-input').placeholder = i18next.t(
					`form:communication.another`,
					{ context: 'placeholder' }
				);
			}
			function preference() {
				const container = document.getElementById('formSurvey');
				const texts = container.querySelectorAll('.form__preferences-text');
				texts[0].textContent = i18next.t(`form:preference.text`);
				texts[1].textContent = i18next.t(`form:preference.text`, { context: 'description' });
			}
			function formConfirmation() {
				const container = document.getElementById('formConfirmation');
				const texts = container.querySelectorAll('.form__confirmation-text');

				texts[0].textContent = i18next.t(`form:confirmation.text`);
				texts[1].textContent = i18next.t(`form:confirmation.text`, { context: 'description' });
			}
		}

		const form = document.forms.myForm;
		const btnSend = window.buttonSend;
		const formCheckbox = window.showForm;
		const switchLanguages = window.formLanguages;

		btnSend.addEventListener('submit', sendForm);
		btnSend.addEventListener('click', checkForm);
		workPageLanguage();
		formShow();
		workSectionNetwor();
		workSectionCommunication();
		workSectionWorkLike();
		workSectionOperatingMode();

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
						inputs[i].removeAttribute('disabled');

						if (radio == radios[0]) {
							inputs[1].removeAttribute('required');
							inputs[1].classList.remove('invalid-input');
							inputs[1].setAttribute('disabled', true);
						} else {
							inputs[0].removeAttribute('required');
							inputs[0].classList.remove('invalid-input');
							inputs[0].setAttribute('disabled', true);
						}
					}
				})
			);
		}

		function transformFormData(formData) {
			const transformedData = {
				name: formData.contents.name,
				address: formData.contents.address,
				phones: [formData.contents.tell],
				email: formData.contents.mail,
				images: [],
				schedule: formData.workDays,
				services: [],
				affiliation: formData.workLike.nip,
				socialMediaLinks: [formData.networkLinks],
				specialTags: [],
				languages: []
			};

			for (const key in formData.survey) {
				if (formData.survey.hasOwnProperty(key) && formData.survey[key]) {
					transformedData.specialTags.push(key);
				}
			}

			for (const key in formData.languages) {
				if (formData.languages.hasOwnProperty(key) && formData.languages[key]) {
					transformedData.languages.push(key);
				}
			}

			return [transformedData];
		}

		async function sendForm(e) {
			console.log('success');

			e.preventDefault();

			let formData = getFormData();
			let transformedData = transformFormData(formData);

			console.log(formData);
			console.log(transformedData);
			try {
				const response = await fetch(
					'https://servicesserver.onrender.com/api/company/createCompany/site/withoutCategory',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(transformedData)
					}
				);

				if (response.ok) {
					console.log('Данные успешно отправлены на сервер');
				} else {
					console.error('Ошибка при отправке данных на сервер:', response.status);
				}
			} catch (error) {
				console.error('Произошла ошибка:', error);
			}
			function getFormData() {
				const contents = getDataFromContents('formContacts');
				const workLike = getWorkLike('workLike');
				const networkLinks = getLinkForNetwork('formNetwork');
				const workDays = getWorkMode('formWorkMode');
				const calendar = window.inputLinkCalendar.value;
				const languages = getCommunicationLanguages('communicationLanguages');
				const survey = getPollResponse('formSurvey');
				const confirmation = window.formConfirmation.checked;

				return {
					contents,
					workLike,
					networkLinks,
					workDays,
					calendar,
					languages,
					survey,
					confirmation
				};

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

		function workPageLanguage() {
			const language = startPageLanguage();
			// console.log(language);
			switchLanguages.addEventListener('input', changeSelectLanguages);

			i18next.init({
				lng: language,
				// debug: true,
				resources: {
					en: en,
					ru: ru,
					pl: pl,
					ua: ua,
					by: by
				}
			});

			function changeSelectLanguages(e) {
				const select = e.target;
				const language = select.options[select.selectedIndex].value;
				i18next.changeLanguage(language);
			}

			function startPageLanguage() {
				let language = getPageLanguage();
				switchLanguages.value = language;

				function getPageLanguage() {
					const browserLanguage = window.navigator.language;
					const availableLanguages = getLanguages();
					const language = availableLanguages.find((el) => el == browserLanguage) ?? 'en';

					function getLanguages() {
						const options = switchLanguages.querySelectorAll('option');
						let optionsValue = [];
						options.forEach((el) => optionsValue.push(el.value));
						return optionsValue;
					}

					return language;
				}
				return language;
			}
		}
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
						<option class="header__language-option" value="by"> by </option>
						<option class="header__language-option" value="ua"> ua </option>
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
					<h2 id="title" class="message__title">The service is not working right now</h2>
					<p id="description" class="message__description">
						We are like bees working to start our hive ju-ju-ju. For now you can register on our
						website to get maximum effect for your business.
					</p>
					<label id="message-button" for="showForm" class="message__button button">
						Registration
					</label>
				</div>
				<form class="form" name="myForm" enctype="application/json">
					<div class="form__inner">
						<div class="form__header">
							<h2 class="form__header-title">Регистрация</h2>
						</div>
						<div class="form__content">
							<div class="form__contacts" id="formContacts">
								<div class="form__contacts-item">
									<div class="form__contacts-item-header input-name">
										<p class="form__contacts-item-text">Название компании/мастера</p>
										<span class="form__required">*</span>
									</div>

									<input
										type="text"
										class="form__contacts-item-input form__input"
										placeholder="Company name"
										required
									/>
								</div>

								<div class="form__contacts-items">
									<div class="form__contacts-item">
										<div class="form__contacts-item-header">
											<p class="form__contacts-item-text input-name">Адрес</p>
										</div>

										<input
											type="text"
											class="form__contacts-item-input form__input"
											placeholder="Address"
										/>
									</div>
									<div class="form__contacts-item">
										<div class="form__contacts-item-header input-name">
											<p class="form__contacts-item-text">Телефон</p>
											<span class="form__required">*</span>
										</div>

										<input
											type="tel"
											class="form__contacts-item-input form__input"
											placeholder="Phone number"
											required
										/>
									</div>
								</div>

								<div class="form__contacts-item">
									<div class="form__contacts-item-header input-name">
										<p class="form__contacts-item-text input-name">Email</p>
										<span class="form__required">*</span>
									</div>

									<input
										type="email"
										class="form__contacts-item-input form__input"
										placeholder="Email"
										required
									/>
								</div>
							</div>

							<div class="form__work-like" id="workLike">
								<div class="form__work-like-header">
									<p class="form__work-like-text section-name">You work like:</p>
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
												<span class="form__work-like-content-text form__text"> Физ. лицо </span>
											</label>
											<div class="form__work-like-input-container" id="data">
												<p class="form__work-like-input-text">PESEL</p>
												<input
													class="form__work-like-input form__input"
													type="number"
													placeholder="Enter 11 numbers"
													disabled
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
												<span class="form__work-like-content-text form__text"> Компания </span>
											</label>
											<div class="form__work-like-input-container" id="data">
												<p class="form__work-like-input-text">NIP</p>
												<input
													class="form__work-like-input form__input"
													type="number"
													placeholder="Enter 10 numbers"
													disabled
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="form__network" id="formNetwork">
								<p class="form__network-text section-name">Соц. сети</p>
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
											placeholder="ссылка"
										/>
									</div>
								</div>
							</div>

							<div class="form__work-mode" id="formWorkMode">
								<input type="checkbox" class="form__checkbox" id="workModeShow" />
								<label for="workModeShow" class="form__work-mode-header">
									<span class="form__work-mode-header-text"> Оperating mode </span>
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
											<span class="form__work-mode-item-text"> Monday </span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Open Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Close Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div for="workModeMonday" class="form__work-mode-item-info">
											<span class="form__work-mode-item-text"> Tuesday </span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Open Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Close Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span class="form__work-mode-item-text"> Wednesday </span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Open Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Close Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span class="form__work-mode-item-text"> Thursday </span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Open Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Close Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span class="form__work-mode-item-text"> Friday </span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Open Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Close Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span class="form__work-mode-item-text"> Saturday </span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Open Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Close Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>

									<div class="form__work-mode-item">
										<input type="checkbox" class="form__work-mode-item-checkbox" />
										<div class="form__work-mode-item-info">
											<span class="form__work-mode-item-text"> Sunday </span>
										</div>
										<div class="form__work-mode-item-content">
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Open Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
											<div class="form__work-mode-item-content-line">
												<span class="form__work-mode-item-content-line-text"> Close Time </span>
												<input class="form__work-mode-item-content-line-input" type="time" />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="form__calendar" id="formLinkCalendar">
								<p class="form__calendar-text section-name">Link to Google calendar</p>
								<input
									id="inputLinkCalendar"
									type="url"
									class="form__calendar-input form__input"
									placeholder="link to Google calendar"
								/>
							</div>

							<div class="form__languages-container" id="communicationLanguages">
								<p class="form__languages-text section-name">Языки комуникациии</p>
								<div class="form__languages-items">
									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-text form__text">Polski</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-text form__text">Беларуская</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-text form__text">Українська</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
										<span class="form__languages-item-text form__text">Русский</span>
									</label>

									<label class="form__languages-item">
										<input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
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
											class="form__languages-item-text form__text form__languages-item-another-text"
											>Another</span
										>
									</label>
									<input
										class="form__languages-item-another-input form__input"
										type="text"
										disabled
										placeholder="Enter other languages"
									/>
								</div>
							</div>

							<div class="form__preferences" id="formSurvey">
								<div class="form__preferences-header">
									<p class="form__preferences-text form__text">
										Select which category matches your company
									</p>
									<p class="form__preferences-text form__text"></p>
								</div>

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
									<span class="form__confirmation-text">
										I agree to the publication of the provided data on YOOHIVE.COM resources
									</span>
									<span class="form__required">*</span>
									<p class="form__confirmation-text"></p>
								</div>
							</label>

							<button class="button" type="submit" id="buttonSend">Registration</button>
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
	.main-background {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
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
		height: 0;
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
		gap: 40px;
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
		margin-bottom: 20px;
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

	.form__preferences-header {
		margin-bottom: 20px;
	}
	.form__preferences-text {
		font-size: 18px;
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
	}

	.form__confirmation-text {
		color: var(--color-text-primary);
	}
</style>
