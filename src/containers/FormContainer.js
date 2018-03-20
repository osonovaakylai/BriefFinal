import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languageSelections: [],
			selectedLanguage: [],
			styleOptions: [],
			styleSelection: [],
			bannerOptions: [],
			bannerSelection: [],
			deadlineOptions: [],
			deadlineSelection: [],
			counterOptions: [],
			counterSelection: [],
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
			scene: [{ name: '' }],
			ownerAgeRangeSelection: '',
			siblingOptions: [],
			siblingSelection: [],
			description: '',
			typeSelections: [],
			selectedType: [],
			selectedChapter:[],
			chapterSelections: [],
  			"chapterAnother": [],			
			styleAnother: [],
			impression: '',
			actionCall:'',
			componentSelections: [],
			componentAnother:[],
			selectedComponent:[],
			typeAnother: []
		};
		this.handleLanguageSelections = this.handleLanguageSelections.bind(this);
		this.handleComponentSelections = this.handleComponentSelections.bind(this);
		this.handleTypeSelections = this.handleTypeSelections.bind(this);
		this.handleChapterSelections = this.handleChapterSelections.bind(this);
		this.handleBannerSelection = this.handleBannerSelection.bind(this);
		this.handleDeadlineSelection = this.handleDeadlineSelection.bind(this);
		this.handleStyleSelection = this.handleStyleSelection.bind(this);
		this.handleCounterSelection = this.handleCounterSelection.bind(this);
		this.handleSeeChange = this.handleSeeChange.bind(this);
		this.handleDoChange = this.handleDoChange.bind(this);
		this.handleFeelChange = this.handleFeelChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleTypesSelection = this.handleTypesSelection.bind(this);
		this.handleChaptersSelection = this.handleChaptersSelection.bind(this);
		this.handleStyleAnother = this.handleStyleAnother.bind(this);
		this.handleTypeAnother = this.handleTypeAnother.bind(this);
		this.handleChapterAnother = this.handleChapterAnother.bind(this);
		this.handleComponentAnother = this.handleComponentAnother.bind(this);
		this.handleImpressionChange = this.handleImpressionChange.bind(this);
		this.handleactionCallChange = this.handleactionCallChange.bind(this);
		
	}
	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					languageSelections: data.languageSelections,
					selectedLanguage: data.selectedLanguage,
					styleOptions:data.styleOptions,
					styleSelection: data.styleSelection,
					bannerOptions: data.bannerOptions,
					bannerSelection: data.bannerSelection,
					deadlineOptions: data.deadlineOptions,
					deadlineSelection: data.deadlineSelection,
					counterOptions: data.counterOptions,
					counterSelection: data.counterSelection,
					color:data.color,
					content: data.content,
					see: data.see,
					do: data.do,
					feel: data.feel,
					auditoria: data.auditoria,
					task: data.task,
					konkurenti: data.konkurenti,
					geography: data.geography,
					shareholders: data.shareholders,
					scene: data.scene,
					siblingOptions: data.siblingOptions,
					siblingSelection: data.siblingSelection,
					description: localStorage.getItem('description'),
					typeSelection:data.typeSelection,
					typeOptions:data.typeOptions,
					chapterOptions: data.chapterOptions,
					chapterSelection: data.chapterSelection,
					styleAnother: data.styleAnother,
					impression: data.impression,
					actionCall: data.actionCall,
					componentSelections: data.componentSelections,
					componentAnother: data.componentAnother,
					selectedComponent: data.selectedComponent,
					typeSelections: data.typeSelections,
					selectedType: data.selectedType,
					typeAnother: data.typeAnother,
					chapterSelections: data.chapterSelections,
					selectedChapter: data.selectedChapter,
					chapterAnother: data.chapterAnother
				});
			});
	}
	
	handleLanguageSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedLanguage.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedLanguage.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedLanguage, newSelection];
		}
		this.setState({ selectedLanguage: newSelectionArray }, () => {localStorage.setItem('language selection', this.state.selectedLanguage)});
	}

	handleComponentSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedComponent.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedComponent.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedComponent, newSelection];
		}
		this.setState({ selectedComponent: newSelectionArray }, () => {localStorage.setItem('component selection', this.state.selectedComponent)});
	}

	handleTypeSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedType.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedType.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedType, newSelection];
		}
		this.setState({ selectedType: newSelectionArray }, () => {localStorage.setItem('type selection', this.state.selectedType)});
	}

	handleChapterSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedChapter.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedChapter.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedChapter, newSelection];
		}
		this.setState({ selectedChapter: newSelectionArray }, () => {localStorage.setItem('chapter selection', this.state.selectedChapter)});
	}

	handleStyleSelection(e) {
		this.setState({ styleSelection: [e.target.value] }, () => {localStorage.setItem('style', this.state.selectstyleSelectionedPart)});
	}

	handleStyleAnother(e) {
		this.setState({ styleAnother: [e.target.value] }, () => {localStorage.setItem('anotherStyle', this.state.styleAnother)});
	}

	handleComponentAnother(e) {
		this.setState({ componentAnother: [e.target.value] }, () => {localStorage.setItem('anotherComponent', this.state.componentAnother)});
	}

	handleTypeAnother(e) {
		this.setState({ typeAnother: [e.target.value] }, () => {localStorage.setItem('anotherType', this.state.typeAnother)});
	}

	handleChapterAnother(e) {
		this.setState({ chapterAnother: [e.target.value] }, () => {localStorage.setItem('anotherChapter', this.state.chapterAnother)});
	}

	handleDeadlineSelection(e) {
		this.setState({ deadlineSelection: [e.target.value] }, () => {localStorage.setItem('deadline', this.state.deadlineSelection)});
	}
	handleBannerSelection(e) {
		this.setState({ bannerSelection: [e.target.value] }, () => {localStorage.setItem('banner', this.state.bannerSelection)});
	}
	handleSiblingsSelection(e) {
		this.setState({ siblingSelection: [e.target.value] }, () => {localStorage.setItem('update', this.state.siblingSelection)});
	}
	handleTypesSelection (e){
		this.setState({ typeSelection: [e.target.value] }, () => {localStorage.setItem('type', this.state.typeSelection)});
	}
	handleChaptersSelection (e){
		this.setState({ chapterSelection: [e.target.value] }, () => {localStorage.setItem('chapter', this.state.chapterSelection)});
	}
	handleDescriptionChange(e) {
		this.setState({ description: e.target.value }, () => {localStorage.setItem('description', this.state.description)});		
	}

	handleImpressionChange(e) {
		this.setState({ impression: e.target.value }, () => {localStorage.setItem('impression', this.state.impression)});		
	}

	handleactionCallChange(e) {
		this.setState({ actionCall: e.target.value }, () => {localStorage.setItem('actionCall', this.state.actionCall)});		
	}

	handleSeeChange(e) {
		this.setState({ see: e.target.value }, () => {localStorage.setItem('see:', this.state.see)});
	}
	handleDoChange(e) {
		this.setState({ do: e.target.value }, () => {localStorage.setItem('do:', this.state.do)});
	}
	handleFeelChange(e) {
		this.setState({ feel: e.target.value }, () => {localStorage.setItem('feel:', this.state.feel)});
	}
	handleCounterSelection(e) {
		this.setState({ counterSelection: [e.target.value] }, () => {localStorage.setItem('counter', this.state.counterSelection)});
	}
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			selectedLanguage: [],
			styleSelection: [],
			deadlineSelection: [],
			bannerSelection: [],
			counterSelection: [],
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
			scene: [{ name: '' }],
			siblingSelection: [],
			description: '',
			typeSelection: '',
			typeOptions: '',
			styleAnother: [],
			impression: '',
			actionCall: '',
			selectedComponent: [],
			selectedType:[],
			selectedChapter:[],
			chapterAnother:[]
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		// const shareholders = this.state.shareholders;
		// console.log(shareholders);

		const formPayload = {
			selectedLanguage: this.state.selectedLanguage,
			styleSelection: this.state.styleSelection,
			bannerSelection: this.state.bannerSelection,
			deadlineSelection: this.state.deadlineSelection,
			counterSelection: this.state.counterSelection,
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
			scene: this.state.scene,
			siblingSelection: this.state.siblingSelection,
			description: this.state.description,
			typeSelection: this.state.typeSelection,
			typeOptions: this.state.typeOptions,
			styleAnother: this.state.styleAnother,
			impression: this.state.impression,
			actionCall: this.state.actionCall,
			selectedComponent: this.state.selectedComponent,
			selectedType: this.state.selectedType,
			typeAnother: this.state.typeAnother,
			selectedChapter: this.state.selectedChapter,
			chapterAnother: this.chapterAnother
		};

		let myjson = [];
		myjson = JSON.stringify(formPayload);
		console.log(myjson);
		localStorage.setItem("form", JSON.stringify(formPayload));
		let storedJson = JSON.parse(localStorage.getItem("form"));
		console.log(storedJson);
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

	handleAddStyleAnother = () => {
		this.setState({ styleAnother: this.state.styleAnother.concat([{name: ''}]) });
	}

	handleAddComponentAnother = () => {
		this.setState({ componentAnother: this.state.componentAnother.concat([{name: ''}]) });
	}

	handleAddTypeAnother = () => {
		this.setState({ typeAnother: this.state.typeAnother.concat([{name: ''}]) });
	}

	handleAddChapterAnother = () => {
		this.setState({ chapterAnother: this.state.chapterAnother.concat([{name: ''}]) });
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

	handleSceneNameChange = (idx) => (evt) => {
		const newScene = this.state.scene.map((scene, sidx) => {
			if (idx !== sidx) return scene;
			return { ...scene, name: evt.target.value };
		});

		this.setState({ scene: newScene });
	}
	handleAddScene = () => {
		this.setState({ scene: this.state.scene.concat([{ name: '' }]) });
	}

	handleRemoveScene = (idx) => () => {
		this.setState({ scene: this.state.scene.filter((s, sidx) => idx !== sidx) });
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
				<h1 className="title">Бриф на разработку сайта</h1>
				<p>Пожалуйста, заполните бриф максимально подробно. Это позволит нам определить конкретные сроки и стоимость разработки.</p>
				<p>Распечатайте и заполните бриф.Срок оценки брифа 2-3 рабочих дня.</p>
				<h5>Сфера деятельности компании</h5>
				<TextArea
					title={''}
					rows={5}
					resize={false}
					content={this.state.description}
					name={'textarea_activity'}
					controlFunc={this.handleDescriptionChange}
					placeholder={''} />
					
				<h5>Характеристики основных услуг:</h5>
				{this.state.shareholders.map((shareholder, idx) => (
					<div className="item">
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={shareholder.name}
							controlFunc={this.handleShareholderNameChange(idx)}
							content={shareholder.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveShareholder(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddShareholder} className="small button_add"><i className="icon icon-plus"></i></button>

				<h5>География реализация товаров, услуг:</h5>
				{this.state.geography.map((geography, idx) => (
					<div  className="item">
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={geography.name}
							controlFunc={this.handleGeographyNameChange(idx)}
							content={geography.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveGeography(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddGeography} className="small button_add"><i className="icon icon-plus"></i></button>

				<h5>Кто является основным потребителем (целевая аудитория сайта):</h5>
				{this.state.auditoria.map((auditoria, idx) => (
					<div  className="item">
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={auditoria.name}
							controlFunc={this.handleAuditoriaNameChange(idx)}
							content={auditoria.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveAuditoria(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddAuditoria} className="small button_add"><i className="icon icon-plus"></i></button>

				<h5>Конкуренты, их веб-ресурсы:</h5>
				{this.state.konkurenti.map((konkurenti, idx) => (
					<div  className="item">
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
						inputType={'text'}
						name={konkurenti.name}
						controlFunc={this.handleKonkurentiNameChange(idx)}
						content={konkurenti.name}
						placeholder={`Название и url:  `}
						/>
						<button type="button" onClick={this.handleRemoveKonkurenti(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddKonkurenti} className="small button_add"><i className="icon icon-plus"></i></button>

				<h5>Задачи, которые должен решать сайт:</h5>
				{this.state.task.map((task, idx) => (
					<div  className="item">
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={task.name}
							controlFunc={this.handleTaskNameChange(idx)}
							content={task.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveTask(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddTask} className="small button_add"><i className="icon icon-plus"></i></button>

				<h5>Тип сайта:</h5>
				<CheckboxGroup 
					setName={'selectedType'}
					type={'checkbox'}
					controlFunc={this.handleTypeSelections}
					options={this.state.typeSelections}
					selectedOptions={this.state.selectedType} />
				<button type="button" onClick={this.handleAddTypeAnother} className="btn_another_check">Другое</button>
				{this.state.typeAnother.map((typeAnother, idx) => (
				<div  className="item">
					<span className="input_span">{`${idx + 1}  `}</span>
					<SingleInput
						inputType={'anotherType'}
						name={typeAnother.name}
						controlFunc={this.selectTypeAnother}
						content={typeAnother.name}
						placeholder={``}
					/>
				</div>
				))}

				<h5>Основные разделы сайта (описать точную структуру разделов сайта):</h5>
				<CheckboxGroup
					setName={'selectedChapter'}
					type={'checkbox'}
					controlFunc={this.handleChapterSelections}
					options={this.state.chapterSelections}
					selectedOptions={this.state.selectedChapter} />
					<button type="button" onClick={this.handleAddChapterAnother} className="btn_another_check">Другое</button>
				{this.state.chapterAnother.map((chapterAnother, idx) => (
				<div  className="item">
					<span className="input_span">{`${idx + 1}  `}</span>
					<SingleInput
						inputType={'anotherChapter'}
						name={chapterAnother.name}
						controlFunc={this.selectChapterAnother}
						content={chapterAnother.name}
						placeholder={``}
					/>
				</div>
				))}

				<h5>Частота предполагаемых обновлений сайта:</h5>
				<CheckboxOrRadioGroup
					setName={'siblings'}
					controlFunc={this.handleSiblingsSelection}
					type={'radio'}
					options={this.state.siblingOptions}
					selectedOptions={this.state.siblingSelection} />
				<h5>Языковые версии сайта:</h5>	
				<CheckboxGroup
					setName={'selectedLanguage'}
					type={'checkbox'}
					controlFunc={this.handleLanguageSelections}
					options={this.state.languageSelections}
					selectedOptions={this.state.selectedLanguage} />

				<h5>Контент сайта</h5>
				<p>(на примере сайта для публикации новостей. На сайте будут новости, которые будут состоять из заголовка и описания)</p>
				{this.state.content.map((content, idx) => (
					<div  className="item">
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={content.name}
							controlFunc={this.handleContentNameChange(idx)}
							content={content.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveContent(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddContent} className="small button_add"><i className="icon icon-plus"></i></button>

				<h5>Стиль сайта</h5>
				<CheckboxOrRadioGroup
					setName={'style'}
					controlFunc={this.handleStyleSelection}
					type={'radio'}
					options={this.state.styleOptions}
					selectedOptions={this.state.styleSelection} />
				<button type="button" onClick={this.handleAddStyleAnother} className="btn_another_radio	">Другое</button>
				{this.state.styleAnother.map((styleAnother, idx) => (
				<div  className="item">
					<span className="input_span">{`${idx + 1}  `}</span>
					<SingleInput
						inputType={'anotherStyle'}
						name={styleAnother.name}
						controlFunc={this.selectStyleAnother}
						content={styleAnother.name}
						placeholder={``}
					/>
				</div>
				))}

				<h5>Впечатление, которое должен произвести сайт на пользователя:</h5>
				<TextArea
					title={''}
					rows={5}
					resize={false}
					content={this.state.impression}
					name={'impression'}
					controlFunc={this.handleImpressionChange}
					placeholder={''} />

				<h5>Какое основное сообщение необходимо довести до сознания потребителя (призыв к действию):</h5>
				<TextArea
					title={''}
					rows={5}
					resize={false}
					content={this.state.actionCall}
					name={'impression'}
					controlFunc={this.handleactionCallChange}
					placeholder={''} />

				<h5>Что вы хотите, чтобы пользователь в результате посещения сайта</h5>
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

				<h5>Цветовая гамма</h5>
				<p>(не нужно заполнять, если есть брендбук)</p>
				{this.state.color.map((color, idx) => (
					<div  className="item">
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={color.name}
							controlFunc={this.handleColorNameChange(idx)}
							content={color.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveColor(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddColor} className="small button_add"><i className="icon icon-plus"></i></button>

				<h5>Компоненты сайта:</h5>
				<CheckboxGroup
					setName={'selectedComponent'}
					controlFunc={this.handleComponentSelections}
					type={'checkbox'}
					selectedOptions={this.state.selectedComponent}
					options={this.state.componentSelections} />
				<button type="button" onClick={this.handleAddComponentAnother} className="btn_another_check">Другое</button>
				{this.state.componentAnother.map((componentAnother, idx) => (
				<div className="item">
					<span className="input_span">{`${idx + 1}  `}</span>
					<SingleInput
						inputType={'anotherComponent'}
						name={componentAnother.name}
						controlFunc={this.selectcomponentAnother}
						content={componentAnother.name}
						placeholder={``}
					/>
				</div>
				))}

				<h5>Предусматривать ли место под баннерную рекламу:</h5>
				<CheckboxOrRadioGroup
					setName={'banner'}
					controlFunc={this.handleBannerSelection}
					type={'radio'}
					options={this.state.bannerOptions}
					selectedOptions={this.state.bannerSelection} />

				<h5>Предусматривать ли место для счетчиков посещений:</h5>
				<CheckboxOrRadioGroup
					setName={'counter'}
					controlFunc={this.handleCounterSelection}
					type={'radio'}
					options={this.state.counterOptions}
					selectedOptions={this.state.counterSelection} />
				
			
				<h5>Срок исполнения заказа (сколько готов ждать заказчик):</h5>
				<CheckboxOrRadioGroup
					setName={'deadline'}
					controlFunc={this.handleDeadlineSelection}
					type={'radio'}
					options={this.state.deadlineOptions}
					selectedOptions={this.state.deadlineSelection} />
				
				<h5 className="clearfix">Пользовательский сценарий</h5>
				<p className="clearfix" >(описать шаги, как посетители  будут взаимодействовать с приложением) Чем больше сценарий, тем лучше мы поймем видение клиента.</p>
				<p>На примере интернет магазина:</p>
				<ol>
					<li> Посетитель зашел на сайт интернет магазина по адресу  www.name.com</li>
					<li> На главной странице увидел товар, нажал на него</li>
					<li> попал на страницу с детальным описание товара </li>
					<li> нажал на кнопку “добавить в корзину”</li>
					<li> Зашел в саму корзину, заполнил адрес доставки</li>
					<li> оплатил через банковскую карту</li>
				</ol>
				{this.state.scene.map((scene, idx) => (
					<div>
						<p>Сценарий {`${idx + 1}`} </p>
						<SingleInput
							inputType={'text'}
							name={scene.name}
							controlFunc={this.handleSceneNameChange(idx)}
							content={scene.name}
							placeholder={`Напишите свой сценарий`}
						/>
					</div>
				))}
				<button type="button" onClick={this.handleAddScene} className="small button_add"><i className="icon icon-plus"></i></button>

				<br />
				<br />
				
				<button
				className="button_submit button_submit_mod float-left"
					onClick={this.handleClearForm}>Clear form</button>
				<input
					type="submit"
					className="float-right button_submit"
					value="Submit" />
			</form>
		);
	}
}

export default FormContainer;
