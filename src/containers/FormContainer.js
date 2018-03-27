import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import SingleInputFeel from '../components/SingleInputFeel';
import SingleInputData from '../components/SingleInputData';

let b;

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
			done: '',
			feel: '',
			color: [{ name: '' }],
			content: [{ name: '' }],
			auditoria: [{ name: '' }],
			task: [{ name: '' }],
			konkurenti: [{ name: '' }],
			geography: [{ name: '' }],
			shareholders: [{ name: '' }],
			scene: [{ name: '' }],
			siblingOptions: [],
			siblingSelection: [],
			description: '',
			typeSelections: [],
			selectedType: [],
			selectedChapter: [],
			chapterSelections: [],
			chapterAnother: [],
			styleAnother: [],
			impression: '',
			actionCall: '',
			componentSelections: [],
			componentAnother: [],
			selectedComponent: [],
			typeAnother: [],
			deadlineAnother:[],
			client:'',
			mail:'',
			tel:''
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
		this.handleDoneChange = this.handleDoneChange.bind(this);
		this.handleFeelChange = this.handleFeelChange.bind(this);
		this.handleClientChange = this.handleClientChange.bind(this);
		this.handleMailChange = this.handleMailChange.bind(this);
		this.handleTelChange = this.handleTelChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleTypesSelection = this.handleTypesSelection.bind(this);
		this.handleChaptersSelection = this.handleChaptersSelection.bind(this);
		this.handleImpressionChange = this.handleImpressionChange.bind(this);
		this.handleactionCallChange = this.handleactionCallChange.bind(this);

	}

	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {

				let selectedChapter = JSON.parse(localStorage.getItem('selectedChapter'));
				let selectedType = JSON.parse(localStorage.getItem('selectedType'));
				let selectedComponent = JSON.parse(localStorage.getItem('selectedComponent'));
				let selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage'));
				let color = JSON.parse(localStorage.getItem('color'));
				let content = JSON.parse(localStorage.getItem('content'));
				let auditoria = JSON.parse(localStorage.getItem('auditoria'));
				let task = JSON.parse(localStorage.getItem('task'));
				let konkurenti = JSON.parse(localStorage.getItem('konkurenti'));
				let geography = JSON.parse(localStorage.getItem('geography'));
				let share = JSON.parse(localStorage.getItem('shareholders'));
				let scene = JSON.parse(localStorage.getItem('scene'));
				let styleAnother = JSON.parse(localStorage.getItem('styleAnother'));
				let deadlineAnother = JSON.parse(localStorage.getItem('deadlineAnother'));
				let componentAnother = JSON.parse(localStorage.getItem('componentAnother'));
				let typeAnother = JSON.parse(localStorage.getItem('typeAnother'));
				let chapterAnother = JSON.parse(localStorage.getItem('chapterAnother'));
				this.setState({
					languageSelections: data.languageSelections,
					selectedLanguage: selectedLanguage === null ? data.selectedLanguage : selectedLanguage.selectedLanguage,
					styleOptions: data.styleOptions,
					styleSelection: this.state.styleSelection.length > 0 ? this.state.styleSelection : this.state.styleAnother,
					bannerOptions: data.bannerOptions,
					bannerSelection: localStorage.getItem('bannerSelection') === null ? data.bannerSelection : localStorage.getItem('bannerSelection'),
					deadlineOptions: data.deadlineOptions,
					deadlineSelection: this.state.deadlineSelection.length > 0 ? this.state.deadlineSelection : this.state.deadlineSelection,
					counterOptions: data.counterOptions,
					deadlineAnother: deadlineAnother === null ? data.deadlineAnother : deadlineAnother.deadlineAnother, 
					counterSelection: localStorage.getItem('counterSelection') === null ? data.counterSelection : localStorage.getItem('counterSelection'),
					color: color === null ? data.color : color.color,
					content: content === null ? data.content : content.content,
					see: localStorage.getItem('see') === null ? data.see : localStorage.getItem('see'),
					done: localStorage.getItem('done') === null ? data.done : localStorage.getItem('done'),
					feel: localStorage.getItem('feel') === null ? data.feel : localStorage.getItem('feel'),
					client: localStorage.getItem('client') === null ? data.client : localStorage.getItem('client'),
					mail: localStorage.getItem('mail') === null ? data.mail : localStorage.getItem('mail'),
					tel: localStorage.getItem('tel') === null ? data.tel : localStorage.getItem('tel'),
					auditoria: auditoria === null ? data.auditoria : auditoria.auditoria,
					task: task === null ? data.task : task.task,
					konkurenti: konkurenti === null ? data.konkurenti : konkurenti.konkurenti,
					geography: geography === null ? data.geography : geography.geography,
					shareholders: share === null ? data.shareholders : share.shareholders,
					scene: scene === null ? data.scene : scene.scene,
					siblingOptions: data.siblingOptions,
					siblingSelection: localStorage.getItem('siblingSelection') === null ? data.siblingSelection : localStorage.getItem('siblingSelection'),
					description: localStorage.getItem('description') === null ? data.description : localStorage.getItem('description'),
					typeSelections: data.typeSelections,
					selectedType: selectedType === null ? data.selectedType : selectedType.selectedType,
					selectedChapter: selectedChapter === null ? data.selectedChapter : selectedChapter.selectedChapter,
					chapterSelections: data.chapterSelections,
					impression: localStorage.getItem('impression') === null ? data.impression : localStorage.getItem('impression'),
					actionCall: localStorage.getItem('actionCall') === null ? data.actionCall : localStorage.getItem('actionCall'),
					componentSelections: data.componentSelections,
					selectedComponent: selectedComponent === null ? data.selectedComponent : selectedComponent.selectedComponent,
					styleAnother: styleAnother === null ? data.styleAnother : styleAnother.styleAnother,
					componentAnother: componentAnother === null ? data.componentAnother : componentAnother.componentAnother,
					typeAnother: typeAnother === null ? data.typeAnother : typeAnother.typeAnother,
					chapterAnother: chapterAnother === null ? data.chapterAnother : chapterAnother.chapterAnother
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
		this.setState({ selectedLanguage: newSelectionArray }, () => {
			let a = { selectedLanguage: this.state.selectedLanguage }
			b = JSON.stringify(a);
			localStorage.setItem('selectedLanguage', b)
		});
	}

	handleComponentSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedComponent.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedComponent.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedComponent, newSelection];
		}
		this.setState({ selectedComponent: newSelectionArray }, () => {
			let a = { selectedComponent: this.state.selectedComponent }
			b = JSON.stringify(a);
			localStorage.setItem('selectedComponent', b)
		});
	}

	handleTypeSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedType.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedType.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedType, newSelection];
		}
		this.setState({ selectedType: newSelectionArray }, () => {
			let a = { selectedType: this.state.selectedType }
			b = JSON.stringify(a);
			localStorage.setItem('selectedType', b)
		});
	}

	handleChapterSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedChapter.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedChapter.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedChapter, newSelection];
		}
		this.setState({ selectedChapter: newSelectionArray }, () => {
			let a = { selectedChapter: this.state.selectedChapter }
			b = JSON.stringify(a);
			localStorage.setItem('selectedChapter', b)
		});
	}

	handleStyleSelection(e) {
		this.setState({ styleSelection: [e.target.value] }, () => { localStorage.setItem('styleSelection', this.state.styleSelection) });
	}

	handleDeadlineSelection(e) {
		this.setState({ deadlineSelection: [e.target.value] }, () => { localStorage.setItem('deadlineSelection', this.state.deadlineSelection) });
	}
	handleBannerSelection(e) {
		this.setState({ bannerSelection: [e.target.value] }, () => { localStorage.setItem('bannerSelection', this.state.bannerSelection) });
	}
	handleSiblingsSelection(e) {
		this.setState({ siblingSelection: [e.target.value] }, () => { localStorage.setItem('update', this.state.siblingSelection) });
	}
	handleTypesSelection(e) {
		this.setState({ typeSelection: [e.target.value] }, () => { localStorage.setItem('type', this.state.typeSelection) });
	}
	handleChaptersSelection(e) {
		this.setState({ chapterSelection: [e.target.value] }, () => { localStorage.setItem('chapter', this.state.chapterSelection) });
	}
	handleDescriptionChange(e) {
		this.setState({ description: e.target.value }, () => { localStorage.setItem('description', this.state.description) });
	}

	handleImpressionChange(e) {
		this.setState({ impression: e.target.value }, () => { localStorage.setItem('impression', this.state.impression) });
	}

	handleactionCallChange(e) {
		this.setState({ actionCall: e.target.value }, () => { localStorage.setItem('actionCall', this.state.actionCall) });
	}

	handleSeeChange(e) {
		this.setState({ see: e.target.value }, () => { localStorage.setItem('see', this.state.see) });
	}
	handleDoneChange(e) {
		this.setState({ done: e.target.value }, () => { localStorage.setItem('done', this.state.done) });
	}
	handleFeelChange(e) {
		this.setState({ feel: e.target.value }, () => { localStorage.setItem('feel', this.state.feel) });
	}
	handleClientChange(e) {
		this.setState({ client: e.target.value }, () => { localStorage.setItem('client', this.state.client) });
	}
	handleMailChange(e) {
		this.setState({ mail: e.target.value }, () => { localStorage.setItem('mail', this.state.mail) });
	}
	handleTelChange(e) {
		this.setState({ tel: e.target.value }, () => { localStorage.setItem('tel', this.state.tel) });
	}
	handleCounterSelection(e) {
		this.setState({ counterSelection: [e.target.value] }, () => { localStorage.setItem('counterSelection', this.state.counterSelection) });
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
			done: '',
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
			selectedType: [],
			selectedChapter: [],
			chapterAnother: [],
			componentAnother: [],
			typeAnother: [],
			deadlineAnother:[],
			client:'',
			mail: '',
			tel:''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();



		const formPayload = {
			selectedLanguage: this.state.selectedLanguage,
			styleSelection: this.state.styleSelection,
			bannerSelection: this.state.bannerSelection,
			deadlineSelection: this.state.deadlineSelection,
			counterSelection: this.state.counterSelection,
			color: this.state.color,
			content: this.state.content,
			see: this.state.see,
			done: this.state.done,
			feel: this.state.feel,
			task: this.state.task,
			konkurenti: this.state.konkurenti,
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
			chapterAnother: this.state.chapterAnother,
			deadlineAnother: this.state.deadlineAnother,
			client: this.state.client,
			mail: this.state.mail,
			tel: this.state.tel
		};

		let myjson = [];
		myjson = JSON.stringify(formPayload);
		console.log(myjson);

		fetch('/api/web', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formPayload)
		}).then(res => {
			if (res.status === 200) {
				alert('Accepted!');
			}
		}).then(res => {
			console.log(res);
		})
		alert("Ex");



		this.handleClearForm(e);
	}

	handleContentNameChange = (idx) => (evt) => {
		const newContent = this.state.content.map((content, sidx) => {
			if (idx !== sidx) return content;
			return { ...content, name: evt.target.value };
		});

		this.setState({ content: newContent }, () => {
			let a = { content: this.state.content }
			b = JSON.stringify(a);
			localStorage.setItem('content', b)
		});
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

		this.setState({ color: newColor }, () => {
			let a = { color: this.state.color }
			b = JSON.stringify(a);
			localStorage.setItem('color', b)
		});
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

		this.setState({ shareholders: newShareholders }, () => {
			let a = { shareholders: this.state.shareholders }
			b = JSON.stringify(a);
			localStorage.setItem('shareholders', b)
		});
	}
	handleAddShareholder = () => {
		this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
	}

	handleRemoveShareholder = (idx) => () => {
		this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
	}


	handleStyleAnotherNameChange = (idx) => (evt) => {
		const newShareholders = this.state.styleAnother.map((styleAnother, sidx) => {
			if (idx !== sidx) return styleAnother;
			return { ...styleAnother, name: evt.target.value };
		});

		this.setState({ styleAnother: newShareholders }, () => {
			let a = { styleAnother: this.state.styleAnother }
			b = JSON.stringify(a);
			localStorage.setItem('styleAnother', b)
		});
	}
	handleAddstyleAnother = () => {
		this.setState({ styleAnother: this.state.styleAnother.concat([{ name: '' }]) });
	}

	handleDeadlineAnotherNameChange = (idx) => (evt) => {
		const newShareholders = this.state.deadlineAnother.map((deadlineAnother, sidx) => {
			if (idx !== sidx) return deadlineAnother;
			return { ...deadlineAnother, name: evt.target.value };
		});

		this.setState({ deadlineAnother: newShareholders }, () => {
			let a = { deadlineAnother: this.state.deadlineAnother }
			b = JSON.stringify(a);
			localStorage.setItem('deadlineAnother', b)
		});
	}
	handleAdddeadlineAnother = () => {
		this.setState({ deadlineAnother: this.state.deadlineAnother.concat([{ name: '' }]) });
	}

	handleComponentAnotherNameChange = (idx) => (evt) => {
		const newShareholders = this.state.componentAnother.map((componentAnother, sidx) => {
			if (idx !== sidx) return componentAnother;
			return { ...componentAnother, name: evt.target.value };
		});

		this.setState({ componentAnother: newShareholders }, () => {
			let a = { componentAnother: this.state.componentAnother }
			b = JSON.stringify(a);
			localStorage.setItem('componentAnother', b)
		});
	}

	handleAddComponentAnother = () => {
		this.setState({ componentAnother: this.state.componentAnother.concat([{ name: '' }]) });
	}

	handleTypeAnotherNameChange = (idx) => (evt) => {
		const newShareholders = this.state.typeAnother.map((typeAnother, sidx) => {
			if (idx !== sidx) return typeAnother;
			return { ...typeAnother, name: evt.target.value };
		});

		this.setState({ typeAnother: newShareholders }, () => {
			let a = { typeAnother: this.state.typeAnother }
			b = JSON.stringify(a);
			localStorage.setItem('typeAnother', b)
		});
	}

	handleAddTypeAnother = () => {
		this.setState({ typeAnother: this.state.typeAnother.concat([{ name: '' }]) });
	}

	handleChapterAnotherNameChange = (idx) => (evt) => {
		const newShareholders = this.state.chapterAnother.map((chapterAnother, sidx) => {
			if (idx !== sidx) return chapterAnother;
			return { ...chapterAnother, name: evt.target.value };
		});

		this.setState({ chapterAnother: newShareholders }, () => {
			let a = { chapterAnother: this.state.chapterAnother }
			b = JSON.stringify(a);
			localStorage.setItem('chapterAnother', b)
		});
	}

	handleAddChapterAnother = () => {
		this.setState({ chapterAnother: this.state.chapterAnother.concat([{ name: '' }]) });
	}

	handleAuditoriaNameChange = (idx) => (evt) => {
		const newAuditoria = this.state.auditoria.map((auditoria, sidx) => {
			if (idx !== sidx) return auditoria;
			return { ...auditoria, name: evt.target.value };
		});

		this.setState({ auditoria: newAuditoria }, () => {
			let a = { auditoria: this.state.auditoria }
			b = JSON.stringify(a);
			localStorage.setItem('auditoria', b)
		});
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

		this.setState({ task: newTask }, () => {
			let a = { task: this.state.task }
			b = JSON.stringify(a);
			localStorage.setItem('task', b)
		});
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

		this.setState({ konkurenti: newKonkurenti }, () => {
			let a = { konkurenti: this.state.konkurenti }
			b = JSON.stringify(a);
			localStorage.setItem('konkurenti', b)
		});
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
		this.setState({ scene: newScene }, () => {
			let a = { scene: this.state.scene }
			b = JSON.stringify(a);
			localStorage.setItem('scene', b)
		});
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

		this.setState({ geography: newGeography }, () => {
			let a = { geography: this.state.geography }
			b = JSON.stringify(a);
			localStorage.setItem('geography', b)
		});
	}

	handleAddGeography = () => {
		this.setState({ geography: this.state.geography.concat([{ name: '' }]) });
	}

	handleRemoveGeography = (idx) => () => {
		this.setState({ geography: this.state.geography.filter((s, sidx) => idx !== sidx) });
	}

	render() {
		// const{
		// 	description,
		// 	content,
		// 	shareholders,
		// 	geography,
		// 	auditoria,
		// 	konkurenti,
		// 	task,
		// 	selectedType,
		// 	selectedChapter,
		// 	impression,
		// 	actionCall,
		// 	selectedComponent

		// } = this.state;

		// const isInvalid =
		// 	description !== '' && 
		// 	content[0].name !== '' &&
		// 	shareholders[0].name !== '' &&
		// 	geography[0].name !== '' &&
		// 	auditoria[0].name !== '' &&
		// 	konkurenti[0].name !== '' &&
		// 	task[0].name !== '' &&
		// 	selectedType.length !== 0 &&
		// 	selectedChapter.length !== 0 &&
		// 	impression !== '' &&
		// 	actionCall !== '' &&
		// 	selectedComponent.length !== 0
		// 	;
		// console.log(isInvalid);

		return (
			<form className="container form_brief" onSubmit={this.handleFormSubmit}>
				<h1 className="title">Бриф на разработку сайта</h1>
				<p className="title_desc">Пожалуйста, заполните бриф максимально подробно. Это позволит нам определить конкретные сроки и стоимость разработки.</p>
				<p className="title_text">Распечатайте и заполните бриф. Срок оценки брифа 2-3 рабочих дня.</p>
				<hr className="hr_style"/>
				<h5 className="title_desc">Ваши данные:</h5>
				<p className="span_p span_p_name">Имя:</p>
				<SingleInputData
					inputType={'text'}
					title={''}
					name={'client'}
					controlFunc={this.handleClientChange}
					content={this.state.client}
					placeholder={''} />
				<p className="span_p span_p_do text-left">E-mail:</p>
				<SingleInputData
					inputType={'text'}
					title={''}
					name={'mail'}
					controlFunc={this.handleMailChange}
					content={this.state.mail}
					placeholder={''} />
				<p className="span_p span_p_tel">Телефон:</p>
				<SingleInputData
					inputType={'text'}
					title={''}
					name={'tel'}
					controlFunc={this.handleTelChange}
					content={this.state.tel}
					placeholder={''} />
				<h5 className="title_desc">Сфера деятельности компании:</h5>
				<TextArea
					title={''}
					rows={5}
					resize={false}
					content={this.state.description}
					name={'textarea_activity'}
					controlFunc={this.handleDescriptionChange}
					placeholder={''} />

				<h5 className="title_desc">Характеристики основных услуг:</h5>
				{this.state.shareholders.map((shareholder, idx) => (
					<div className="item_form" key={idx}>
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

				<h5 className="title_desc">География реализация товаров, услуг:</h5>
				{this.state.geography.map((geography, idx) => (
					<div className="item_form" key={idx}>
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

				<h5 className="title_desc">Кто является основным потребителем (целевая аудитория сайта):</h5>
				{this.state.auditoria.map((auditoria, idx) => (
					<div className="item_form" key={idx}>
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

				<h5 className="title_desc">Конкуренты, их веб-ресурсы:</h5>
				{this.state.konkurenti.map((konkurenti, idx) => (
					<div className="item_form" key={idx}>
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

				<h5 className="title_desc">Задачи, которые должен решать сайт:</h5>
				{this.state.task.map((task, idx) => (
					<div className="item_form" key={idx}>
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

				<h5 className="title_desc">Тип сайта:</h5>
				<CheckboxGroup
					setName={'selectedType'}
					type={'checkbox'}
					controlFunc={this.handleTypeSelections}
					options={this.state.typeSelections}
					selectedOptions={this.state.selectedType} />

				<button type="button" onClick={this.handleAddTypeAnother} className="btn_another_check">
					<svg width="14" height="13" className="svg_check">
					<rect width="14" height="13" className="rect_check" />
					</svg>Другое
				</button>
				{this.state.typeAnother.map((typeAnother, idx) => (
					<div className="item_form" key={idx}>
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={typeAnother.name}
							controlFunc={this.handleTypeAnotherNameChange(idx)}
							content={typeAnother.name}
							placeholder={''}
						/>

					</div>
				))}

				<h5 className="title_desc">Основные разделы сайта (описать точную структуру разделов сайта):</h5>
				<CheckboxGroup
					setName={'selectedChapter'}
					type={'checkbox'}
					controlFunc={this.handleChapterSelections}
					options={this.state.chapterSelections}
					selectedOptions={this.state.selectedChapter} />
				<button type="button" onClick={this.handleAddChapterAnother} className="btn_another_check">
					<svg width="14" height="13" className="svg_check">
					<rect width="14" height="13" className="rect_check" />
					</svg>Другое
				</button>
				{this.state.chapterAnother.map((chapterAnother, idx) => (
					<div className="item_form" key={idx}>
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={chapterAnother.name}
							controlFunc={this.handleChapterAnotherNameChange(idx)}
							content={chapterAnother.name}
							placeholder={''}
						/>

					</div>
				))}


				<h5 className="title_desc">Частота предполагаемых обновлений сайта:</h5>
				<CheckboxOrRadioGroup
					setName={'siblings'}
					controlFunc={this.handleSiblingsSelection}
					type={'radio'}
					options={this.state.siblingOptions}
					selectedOptions={this.state.siblingSelection} />
				<h5 className="title_desc">Языковые версии сайта:</h5>
				<CheckboxGroup
					setName={'selectedLanguage'}
					type={'checkbox'}
					controlFunc={this.handleLanguageSelections}
					options={this.state.languageSelections}
					selectedOptions={this.state.selectedLanguage} />

				<h5 className="title_desc">Контент сайта</h5>
				<p>(На примере сайта для публикации новостей. На сайте будут новости, которые будут состоять из заголовка и описания)</p>
				{this.state.content.map((content, idx) => (
					<div className="item_form" key={idx}>
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

				<h5 className="title_desc">Стиль сайта:</h5>
				<CheckboxOrRadioGroup
					setName={'style'}
					controlFunc={this.handleStyleSelection}
					type={'radio'}
					options={this.state.styleOptions}
					selectedOptions={this.state.styleSelection} />
				<button type="button" onClick={this.handleAddstyleAnother} className="small btn_another_radio">
					<svg height="30" width="30">
					<circle cx="10" cy="20" r="6.5" stroke="#c1c1c1" stroke-width="3" fill="#fff" />
					</svg>Другое
				</button>
				{this.state.styleAnother.map((styleAnother, idx) => (
					<div className="item_form" key={idx}>
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={styleAnother.name}
							controlFunc={this.handleStyleAnotherNameChange(idx)}
							content={styleAnother.name}
							placeholder={''}
						/>

					</div>
				))}

				<h5 className="title_desc">Впечатление, которое должен произвести сайт на пользователя:</h5>
				<TextArea
					title={''}
					rows={5}
					resize={false}
					content={this.state.impression}
					name={'impression'}
					controlFunc={this.handleImpressionChange}
					placeholder={''} />

				<h5 className="title_desc">Какое основное сообщение необходимо довести до сознания потребителя (призыв к действию):</h5>
				<TextArea
					title={''}
					rows={5}
					resize={false}
					content={this.state.actionCall}
					name={'actionCall'}
					controlFunc={this.handleactionCallChange}
					placeholder={''} />

				<h5 className="title_desc">Что вы хотите, чтобы пользователь в результате посещения сайта</h5>
				<p className="span_p span_p_see">Увидел:</p>
				<SingleInputFeel
					inputType={'text'}
					title={''}
					name={'see'}
					controlFunc={this.handleSeeChange}
					content={this.state.see}
					placeholder={''} />
				<p className="span_p span_p_do text-left">Сделал:</p>
				<SingleInputFeel
					inputType={'text'}
					title={''}
					name={'done'}
					controlFunc={this.handleDoneChange}
					content={this.state.done}
					placeholder={''} />
				<p className="span_p">Почувствовал:</p>
				<SingleInputFeel
					inputType={'text'}
					title={''}
					name={'feel'}
					controlFunc={this.handleFeelChange}
					content={this.state.feel}
					placeholder={''} />

				<h5 className="title_desc">Цветовая гамма</h5>
				<p className="title_text">(Не нужно заполнять, если есть брендбук)</p>
				{this.state.color.map((color, idx) => (
					<div className="item_form" key={idx}>
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={color.name}
							controlFunc={this.handleColorNameChange(idx)}
							content={color.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveColor(idx)} className="button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddColor} className="button_add"><i className="icon icon-plus"></i></button>

				<h5 className="title_desc">Компоненты сайта:</h5>
				<CheckboxGroup
					setName={'selectedComponent'}
					controlFunc={this.handleComponentSelections}
					type={'checkbox'}
					selectedOptions={this.state.selectedComponent}
					options={this.state.componentSelections} />
				<button type="button" onClick={this.handleAddComponentAnother} className="btn_another_check">
					<svg width="14" height="13" className="svg_check">
					<rect width="14" height="13" className="rect_check" />
					</svg>Другое
				</button>
				{this.state.componentAnother.map((componentAnother, idx) => (
					<div className="item_form" key={idx}>
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={componentAnother.name}
							controlFunc={this.handleComponentAnotherNameChange(idx)}
							content={componentAnother.name}
							placeholder={''}
						/>

					</div>
				))}

				<h5 className="title_desc">Предусматривать ли место под баннерную рекламу:</h5>
				<CheckboxOrRadioGroup
					setName={'bannerSelection'}
					controlFunc={this.handleBannerSelection}
					type={'radio'}
					options={this.state.bannerOptions}
					selectedOptions={this.state.bannerSelection} />

				<h5 className="title_desc">Предусматривать ли место для счетчиков посещений:</h5>
				<CheckboxOrRadioGroup
					setName={'counterSelection'}
					controlFunc={this.handleCounterSelection}
					type={'radio'}
					options={this.state.counterOptions}
					selectedOptions={this.state.counterSelection} />


				<h5 className="title_desc">Срок исполнения заказа (сколько готов ждать заказчик):</h5>
				<CheckboxOrRadioGroup
					setName={'deadlineSelection'}
					controlFunc={this.handleDeadlineSelection}
					type={'radio'}
					options={this.state.deadlineOptions}
					selectedOptions={this.state.deadlineSelection} />
				<button type="button" onClick={this.handleAdddeadlineAnother} className="small btn_another_radio">
					<svg height="30" width="30">
					<circle cx="10" cy="20" r="6.5" stroke="#c1c1c1" stroke-width="3" fill="#fff" />
					</svg>Другое
				</button>
				{this.state.deadlineAnother.map((deadlineAnother, idx) => (
					<div className="item_form" key={idx}>
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={deadlineAnother.name}
							controlFunc={this.handleDeadlineAnotherNameChange(idx)}
							content={deadlineAnother.name}
							placeholder={''}
						/>

					</div>
				))}

				<h5 className="title_desc">Пользовательский сценарий:</h5>
				<p className="title_text" >(Описать шаги, как посетители  будут взаимодействовать с приложением) Чем больше сценарий, тем лучше мы поймем видение клиента.</p>
				<p className="title_text">На примере интернет магазина:</p>
				<ol className="title_text">
					<li> Посетитель зашел на сайт интернет магазина по адресу  www.name.com</li>
					<li> На главной странице увидел товар, нажал на него</li>
					<li> Попал на страницу с детальным описание товара </li>
					<li> Нажал на кнопку “добавить в корзину”</li>
					<li> Зашел в саму корзину, заполнил адрес доставки</li>
					<li> Оплатил через банковскую карту</li>
				</ol>

				<p className="title_desc">Ваш сценарий: </p>
				{this.state.scene.map((scene, idx) => (
					<div className="item_form" key={idx}>
						<span className="input_span">{`${idx + 1}  `}</span>
						<SingleInput
							inputType={'text'}
							name={scene.name}
							controlFunc={this.handleSceneNameChange(idx)}
							content={scene.name}
							placeholder={``}
						/>
						<button type="button" onClick={this.handleRemoveScene(idx)} className="button_minus"><i className="icon icon-minus"></i></button>
					</div>
				))}
				<button type="button" onClick={this.handleAddScene} className="button_add"><i className="icon icon-plus"></i></button>

				<br />
				<br />

				<button
					className="button_clear"
					onClick={this.handleClearForm}>Clear form</button>
				<input
					type="submit"
					className="button_submit"
					value="Submit"
				/>
			</form>
		);
	}
}

export default FormContainer;
