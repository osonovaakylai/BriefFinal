import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languageSelections: [],
			selectedLanguage: [],
			platformSelections: [],
			selectedPlatform: [],
			partSelections: [],
			selectedPart: [],
			styleOptions: [],
			styleSelection: [],
			bannerOptions: [],
			bannerSelection: [],
			deadlineOptions: [],
			deadlineSelection: [],
			designOptions: [],
			designSelection: [],
			see: '',
			do: '',
			feel: '',
			color: [{ name: '' }],
			content: [{ name: '' }],
			auditoria: [{ name: '' }],
			task: [{ name: '' }],
			konkurenti: [{ name: '' }],
			geography: [{ name: '' }],
			shareholders: [{ name: '' }],
			ownerAgeRangeSelection: '',
			siblingOptions: [],
			siblingSelection: [],
			description: ''
		};
		this.handleLanguageSelections = this.handleLanguageSelections.bind(this);
		this.handlePlatformSelections = this.handlePlatformSelections.bind(this);
		this.handlePartSelections = this.handlePartSelections.bind(this);
		this.handleBannerSelection = this.handleBannerSelection.bind(this);
		this.handleDeadlineSelection = this.handleDeadlineSelection.bind(this);
		this.handleStyleSelection = this.handleStyleSelection.bind(this);
		this.handleDesignSelection = this.handleDesignSelection.bind(this);
		this.handleSeeChange = this.handleSeeChange.bind(this);
		this.handleDoChange = this.handleDoChange.bind(this);
		this.handleFeelChange = this.handleFeelChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}
	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					languageSelections: data.languageSelections,
					selectedLanguage: data.selectedLanguage,
					platformSelections: data.platformSelections,
					selectedPlatform: data.selectedPlatform,
					partSelections: data.partSelections,
					selectedPart: data.selectedPart,
					styleOptions: data.styleOptions,
					styleSelection: data.styleSelection,
					bannerOptions: data.bannerOptions,
					bannerSelection: data.bannerSelection,
					deadlineOptions: data.deadlineOptions,
					deadlineSelection: data.deadlineSelection,
					designOptions: data.designOptions,
					designSelection: data.designSelection,
					color: data.color,
					content: data.content,
					see: data.see,
					do: data.do,
					feel: data.feel,
					auditoria: data.auditoria,
					task: data.task,
					konkurenti: data.konkurenti,
					geography: data.geography,
					shareholders: data.shareholders,
					siblingOptions: data.siblingOptions,
					siblingSelection: data.siblingSelection,
					description: data.description
				});
			});
	}
	handlePlatformSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedPlatform.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedPlatform.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedPlatform, newSelection];
		}
		this.setState({ selectedPlatform: newSelectionArray }, () => console.log('platform selection', this.state.selectedPlatform));
	}
	handleLanguageSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedLanguage.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedLanguage.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedLanguage, newSelection];
		}
		this.setState({ selectedLanguage: newSelectionArray }, () => console.log('language selection', this.state.selectedLanguage));
	}
	handlePartSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedPart.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedPart.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedPart, newSelection];
		}
		this.setState({ selectedPart: newSelectionArray }, () => console.log('part selection', this.state.selectedPart));
	}
	handleStyleSelection(e) {
		this.setState({ styleSelection: [e.target.value] }, () => console.log('style', this.state.styleSelection));
	}
	handleDeadlineSelection(e) {
		this.setState({ deadlineSelection: [e.target.value] }, () => console.log('deadline', this.state.deadlineSelection));
	}
	handleBannerSelection(e) {
		this.setState({ bannerSelection: [e.target.value] }, () => console.log('banner', this.state.bannerSelection));
	}
	handleSiblingsSelection(e) {
		this.setState({ siblingSelection: [e.target.value] }, () => console.log('update', this.state.siblingSelection));
	}
	handleDescriptionChange(e) {
		// const textArray = e.target.value.split('').filter(x => x !== 'e');
		// console.log('string split into array of letters',textArray);
		// const filteredText = textArray.join('');
		// this.setState({ description: filteredText }, () => console.log('description', this.state.description));
		this.setState({ description: e.target.value }, () => console.log('description:', this.state.description));
	}
	handleSeeChange(e) {
		this.setState({ see: e.target.value }, () => console.log('see:', this.state.see));
	}
	handleDoChange(e) {
		this.setState({ do: e.target.value }, () => console.log('do:', this.state.do));
	}
	handleFeelChange(e) {
		this.setState({ feel: e.target.value }, () => console.log('feel:', this.state.feel));
	}
	handleDesignSelection(e) {
		this.setState({ designSelection: [e.target.value] }, () => console.log('design', this.state.designSelection));
	}
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			selectedPlatform: [],
			selectedLanguage: [],
			selectedPart: [],
			styleSelection: [],
			deadlineSelection: [],
			bannerSelection: [],
			designSelection: [],
			color: [{ name: '' }],
			content: [{ name: '' }],
			see: '',
			do: '',
			feel: '',
			task: [{ name: '' }],
			konkurenti: [{ name: '' }],
			auditoria: [{ name: '' }],
			geography: [{ name: '' }],
			shareholders: [{ name: '' }],
			siblingSelection: [],
			description: ''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		// const shareholders = this.state.shareholders;
		// console.log(shareholders);

		const formPayload = {
			selectedPlatform: this.state.selectedPlatform,
			selectedLanguage: this.state.selectedLanguage,
			selectedPart: this.state.selectedPart,
			styleSelection: this.state.styleSelection,
			bannerSelection: this.state.bannerSelection,
			deadlineSelection: this.state.deadlineSelection,
			designSelection: this.state.designSelection,
			color: this.state.color,
			content: this.state.content,
			see: this.state.see,
			do: this.state.do,
			feel: this.state.feel,
			task: this.state.task,
			konkureti: this.state.konkurenti,
			auditoria: this.state.auditoria,
			geography: this.state.geography,
			shareholders: this.state.shareholders,
			siblingSelection: this.state.siblingSelection,
			description: this.state.description
		};

		// console.log('Send this in a POST request:', formPayload);
		let myjson = JSON.stringify(formPayload);
		console.log(myjson);
		this.handleClearForm(e);
	}

	handleContentNameChange = (idx) => (evt) => {
		const newContent = this.state.content.map((content, sidx) => {
			if (idx !== sidx) return content;
			return { ...content, name: evt.target.value };
		});

		this.setState({ content: newContent });
	}
	handleAddContent = () => {
		this.setState({ content: this.state.content.concat([{ name: '' }]) });
	}

	handleRemoveContent = (idx) => () => {
		this.setState({ content: this.state.content.filter((s, sidx) => idx !== sidx) });
	}

	handleColorNameChange = (idx) => (evt) => {
		const newColor = this.state.color.map((color, sidx) => {
			if (idx !== sidx) return color;
			return { ...color, name: evt.target.value };
		});

		this.setState({ color: newColor });
	}
	handleAddColor = () => {
		this.setState({ color: this.state.color.concat([{ name: '' }]) });
	}

	handleRemoveColor = (idx) => () => {
		this.setState({ color: this.state.color.filter((s, sidx) => idx !== sidx) });
	}
	handleShareholderNameChange = (idx) => (evt) => {
		const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
			if (idx !== sidx) return shareholder;
			return { ...shareholder, name: evt.target.value };
		});

		this.setState({ shareholders: newShareholders });
	}
	handleAddShareholder = () => {
		this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
	}

	handleRemoveShareholder = (idx) => () => {
		this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
	}

	handleAuditoriaNameChange = (idx) => (evt) => {
		const newAuditoria = this.state.auditoria.map((auditoria, sidx) => {
			if (idx !== sidx) return auditoria;
			return { ...auditoria, name: evt.target.value };
		});

		this.setState({ auditoria: newAuditoria });
	}
	handleAddAuditoria = () => {
		this.setState({ auditoria: this.state.auditoria.concat([{ name: '' }]) });
	}

	handleRemoveAuditoria = (idx) => () => {
		this.setState({ auditoria: this.state.auditoria.filter((s, sidx) => idx !== sidx) });
	}

	handleTaskNameChange = (idx) => (evt) => {
		const newTask = this.state.task.map((task, sidx) => {
			if (idx !== sidx) return task;
			return { ...task, name: evt.target.value };
		});

		this.setState({ task: newTask });
	}
	handleAddTask = () => {
		this.setState({ task: this.state.task.concat([{ name: '' }]) });
	}

	handleRemoveTask = (idx) => () => {
		this.setState({ task: this.state.task.filter((s, sidx) => idx !== sidx) });
	}

	handleKonkurentiNameChange = (idx) => (evt) => {
		const newKonkurenti = this.state.konkurenti.map((konkurenti, sidx) => {
			if (idx !== sidx) return konkurenti;
			return { ...konkurenti, name: evt.target.value };
		});

		this.setState({ konkurenti: newKonkurenti });
	}
	handleAddKonkurenti = () => {
		this.setState({ konkurenti: this.state.konkurenti.concat([{ name: '' }]) });
	}

	handleRemoveKonkurenti = (idx) => () => {
		this.setState({ konkurenti: this.state.konkurenti.filter((s, sidx) => idx !== sidx) });
	}



	handleGeographyNameChange = (idx) => (evt) => {
		const newGeography = this.state.geography.map((geography, sidx) => {
			if (idx !== sidx) return geography;
			return { ...geography, name: evt.target.value };
		});

		this.setState({ geography: newGeography });
	}

	handleAddGeography = () => {
		this.setState({ geography: this.state.geography.concat([{ name: '' }]) });
	}

	handleRemoveGeography = (idx) => () => {
		this.setState({ geography: this.state.geography.filter((s, sidx) => idx !== sidx) });
	}

	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h3>Бриф на разработку мобильного приложения</h3>
				<p>Пожалуйста, заполните бриф максимально подробно. Это позволит нам определить конкретные сроки и стоимость разработки.</p>
				<p>Распечатайте и заполните бриф.Срок оценки брифа 2-3 рабочих дня.</p>
				<h3>Сфера деятельности компании</h3>
				<TextArea
					title={''}
					rows={5}
					resize={false}
					content={this.state.description}
					name={'textarea_activity'}
					controlFunc={this.handleDescriptionChange}
					placeholder={''} />
				<h3>Характеристики основных услуг:</h3>
				{this.state.shareholders.map((shareholder, idx) => (
					<div>
						<SingleInput
							inputType={'text'}
							name={shareholder.name}
							controlFunc={this.handleShareholderNameChange(idx)}
							content={shareholder.name}
							placeholder={`${idx + 1}.  `}
						/>
						<button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
					</div>
				))}
				<button type="button" onClick={this.handleAddShareholder} className="small">Добавить</button>
				<h4>География реализация товаров, услуг:</h4>
				{this.state.geography.map((geography, idx) => (
					<div>
						<SingleInput
							inputType={'text'}
							name={geography.name}
							controlFunc={this.handleGeographyNameChange(idx)}
							content={geography.name}
							placeholder={`${idx + 1}.  `}
						/>
						<button type="button" onClick={this.handleRemoveGeography(idx)} className="small">-</button>
					</div>
				))}
				<button type="button" onClick={this.handleAddGeography} className="small">Добавить</button>

				<h4>Кто является основным потребителем (целевая аудитория сайта):</h4>
				{this.state.auditoria.map((auditoria, idx) => (
					<div>
						<SingleInput
							inputType={'text'}
							name={auditoria.name}
							controlFunc={this.handleAuditoriaNameChange(idx)}
							content={auditoria.name}
							placeholder={`${idx + 1}.  `}
						/>
						<button type="button" onClick={this.handleRemoveAuditoria(idx)} className="small">-</button>
					</div>
				))}
				<button type="button" onClick={this.handleAddAuditoria} className="small">Добавить</button>
				<h4>Конкуренты и их приложения (аналоги):</h4>
				<p>(напишите пожалуйста в формате “название приложение - ссылка на установку”</p>
				<sub>Пример: Uber - https://itunes.apple.com/us/app/uber/id368677368?mt=8</sub>
				{this.state.konkurenti.map((konkurenti, idx) => (
					<div>
						<SingleInput
							inputType={'text'}
							name={konkurenti.name}
							controlFunc={this.handleKonkurentiNameChange(idx)}
							content={konkurenti.name}
							placeholder={`${idx + 1}.  `}
						/>
						<button type="button" onClick={this.handleRemoveKonkurenti(idx)} className="small">-</button>
					</div>
				))}
				<button type="button" onClick={this.handleAddKonkurenti} className="small">Добавить</button>
				<h4>Задачи, которые должен решать сайт:</h4>
				{this.state.task.map((task, idx) => (
					<div>
						<SingleInput
							inputType={'text'}
							name={task.name}
							controlFunc={this.handleTaskNameChange(idx)}
							content={task.name}
							placeholder={`${idx + 1}.  `}
						/>
						<button type="button" onClick={this.handleRemoveTask(idx)} className="small">-</button>
					</div>
				))}
				<button type="button" onClick={this.handleAddTask} className="small">Добавить</button>
				<h5>Частота предполагаемых обновлений приложения:</h5>
				<CheckboxOrRadioGroup
					setName={'siblings'}
					controlFunc={this.handleSiblingsSelection}
					type={'radio'}
					options={this.state.siblingOptions}
					selectedOptions={this.state.siblingSelection} />				
				<h4>Что вы хотите, чтобы пользователь в результате посещения сайта</h4>
				<SingleInput
					inputType={'text'}
					title={''}
					name={'see'}
					controlFunc={this.handleSeeChange}
					content={this.state.see}
					placeholder={'Увидел:'} />
				<SingleInput
					inputType={'text'}
					title={''}
					name={'do'}
					controlFunc={this.handleDoChange}
					content={this.state.do}
					placeholder={'Сделал:'} />
				<SingleInput
					inputType={'text'}
					title={''}
					name={'feel'}
					controlFunc={this.handleFeelChange}
					content={this.state.feel}
					placeholder={'Почувствовал:'} />

				<h4>Контент внутри приложения </h4>
				<p>(на примере сайта для вызова такси - список всех заказов, список таксистов что работает в текущую смену и т.п)</p>
				{this.state.content.map((content, idx) => (
					<div>
						<SingleInput
							inputType={'text'}
							name={content.name}
							controlFunc={this.handleContentNameChange(idx)}
							content={content.name}
							placeholder={`${idx + 1}.  `}
						/>
						<button type="button" onClick={this.handleRemoveContent(idx)} className="small">-</button>
					</div>
				))}
				<button type="button" onClick={this.handleAddContent} className="small">Добавить</button>
				<h4>Цветовая гамма</h4>
				<p>(не нужно заполнять, если есть брендбук)</p>
				{this.state.color.map((color, idx) => (
					<div>
						<SingleInput
							inputType={'text'}
							name={color.name}
							controlFunc={this.handleColorNameChange(idx)}
							content={color.name}
							placeholder={`${idx + 1}.  `}
						/>
						<button type="button" onClick={this.handleRemoveColor(idx)} className="small">-</button>
					</div>
				))}
				<button type="button" onClick={this.handleAddColor} className="small">Добавить</button>
				<h4>На каких платформах планируете размещать приложение</h4>
				<sub>(пожалуйста отметьте звездочками, что из них приоритетнее: *** - высокий приоритет, ** - средний, * - низкий)
				</sub>
				<br />
				<br />
				<p>Например: <br /> Play Market ***</p>
				<CheckboxOrRadioGroup
					setName={'selectedPlatform'}
					type={'checkbox'}
					controlFunc={this.handlePlatformSelections}
					options={this.state.platformSelections}
					selectedOptions={this.state.selectedPlatform} />
				<h4>Языковые версии</h4>	
				<CheckboxOrRadioGroup
					setName={'selectedLanguage'}
					type={'checkbox'}
					controlFunc={this.handleLanguageSelections}
					options={this.state.languageSelections}
					selectedOptions={this.state.selectedLanguage} />
				<h4>Компоненты/окна:</h4>	
				<CheckboxOrRadioGroup
					setName={'selectedPart'}
					type={'checkbox'}
					controlFunc={this.handlePartSelections}
					options={this.state.partSelections}
					selectedOptions={this.state.selectedPart} />
				<h5>Кто будет разрабатывать дизайн?</h5>
				<CheckboxOrRadioGroup
					setName={'design'}
					controlFunc={this.handleDesignSelection}
					type={'radio'}
					options={this.state.designOptions}
					selectedOptions={this.state.designSelection} />
				<h5>Предусматривать ли место под баннерную рекламу (AdMob):</h5>
				<CheckboxOrRadioGroup
					setName={'banner'}
					controlFunc={this.handleBannerSelection}
					type={'radio'}
					options={this.state.bannerOptions}
					selectedOptions={this.state.bannerSelection} />
				<h5>Стиль сайта</h5>
				<CheckboxOrRadioGroup
					setName={'style'}
					controlFunc={this.handleStyleSelection}
					type={'radio'}
					options={this.state.styleOptions}
					selectedOptions={this.state.styleSelection} />
				<h5>Сроки исполнения заказа (сколько готов ждать заказчик):</h5>
				<CheckboxOrRadioGroup
					setName={'deadline'}
					controlFunc={this.handleDeadlineSelection}
					type={'radio'}
					options={this.state.deadlineOptions}
					selectedOptions={this.state.deadlineSelection} />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit" />
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
				<br />
				<br />
				<h5 className="clearfix">Пользовательский сценарий</h5>
				<p className="clearfix" >(описать шаги, как посетители  будут взаимодействовать с приложением) Чем больше сценарий, тем лучше мы поймем видение клиента.</p>
				<p>На примере Yandex Taxi</p>
				<ol>
					<li> Скачал приложение “Yandex Taxi” из Play Marketa</li>
					<li> Запустил приложение, на главной экране увидел карту города с указанием моего месмтоположения</li>
					<li> Нажал на кнопку “ куда?” </li>
					<li> Ввел адрес конечного пункта, затем нажал на кнопку “вызвать такси”</li>
					<li> На карте города, появились таксисты что находятся рядом со мной</li>
					<li> Приложение выбрала самого первого такси</li>
					<li> Появилось сообщение “Водитель И.И.ИВанов на автомобиле Subaru Forester с гос.номером S 1234 A выехал к Вам!” </li>
				</ol>
			</form>
		);
	}
}

export default FormContainer;
