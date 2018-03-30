import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import SingleInput from '../components/SingleInput';
import SingleInputFeel from '../components/SingleInputFeel';
import SingleInputAnother from '../components/SingleInputAnother';
import TextArea from '../components/TextArea';
import SingleInputData from '../components/SingleInputData';
import NavBar from '../components/NavBar';
import Dropdown from '../components/Dropdown';
import Icon from '../components/Icon';
import logo from './../img/logo.png';
import { Link } from "react-router-dom";
// import BriefSite from './BriefSite';
import Modal from 'react-modal'

let b;

const customStyles = {
	content : {
	  top                   : '50%',
	  left                  : '50%',
	  right                 : 'auto',
	  bottom                : 'auto',
	  marginRight           : '-50%',
	  transform             : 'translate(-50%, -50%)'
	}
  };

class BriefMobile extends Component {
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
			done: '',
			feel: '',
			color: [{ name: '' }],
			content: [{ name: '' }],
			auditoria: [{ name: '' }],
			task: [{ name: '' }],
			konkurenti: [{ name: '' }],
			geography: [{ name: '' }],
			shareholders: [{ name: '' }],
			styleAnother: [],
			deadlineAnother: [],
			ownerAgeRangeSelection: '',
			siblingOptions: [],
			siblingSelection: [],
			description: '',
			scene: [{ name: '' }],
			client: '',
			mail: '',
			tel: '',
			modalIsOpen: false,
		};
		this.handleClientChange = this.handleClientChange.bind(this);
		this.handleMailChange = this.handleMailChange.bind(this);
		this.handleTelChange = this.handleTelChange.bind(this);
		this.handleLanguageSelections = this.handleLanguageSelections.bind(this);
		this.handlePlatformSelections = this.handlePlatformSelections.bind(this);
		this.handlePartSelections = this.handlePartSelections.bind(this);
		this.handleBannerSelection = this.handleBannerSelection.bind(this);
		this.handleDeadlineSelection = this.handleDeadlineSelection.bind(this);
		this.handleStyleSelection = this.handleStyleSelection.bind(this);
		this.handleDesignSelection = this.handleDesignSelection.bind(this);
		this.handleSeeChange = this.handleSeeChange.bind(this);
		this.handleDoneChange = this.handleDoneChange.bind(this);
		this.handleFeelChange = this.handleFeelChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

	}

	openModal() {
		this.setState({modalIsOpen: true});
	  }
	
	  afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	  }
	
	  closeModal() {
		this.setState({modalIsOpen: false});
	  }

	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				let scene = JSON.parse(localStorage.getItem('scene'));
				let share = JSON.parse(localStorage.getItem('shareholders'));
				let styleAnother = JSON.parse(localStorage.getItem('styleAnother'));
				let deadlineAnother = JSON.parse(localStorage.getItem('deadlineAnother'));
				let color = JSON.parse(localStorage.getItem('color'));
				let content = JSON.parse(localStorage.getItem('content'));
				let task = JSON.parse(localStorage.getItem('task'));
				let auditoria = JSON.parse(localStorage.getItem('auditoria'));
				let konkurenti = JSON.parse(localStorage.getItem('konkurenti'));
				let geography = JSON.parse(localStorage.getItem('geography'));
				let selectedPlatform = JSON.parse(localStorage.getItem('selectedPlatform'));
				let selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage'));
				let selectedPart = JSON.parse(localStorage.getItem('selectedPart'));
				this.setState({
					client: localStorage.getItem('client') === null ? data.client : localStorage.getItem('client'),
					mail: localStorage.getItem('mail') === null ? data.mail : localStorage.getItem('mail'),
					tel: localStorage.getItem('tel') === null ? data.tel : localStorage.getItem('tel'),
					scene: scene === null ? data.scene : scene.scene,
					deadlineAnother: deadlineAnother === null ? data.deadlineAnother : deadlineAnother.deadlineAnother,
					styleAnother: styleAnother === null ? data.styleAnother : styleAnother.styleAnother,
					languageSelections: data.languageSelections,
					selectedLanguage: selectedLanguage === null ? data.selectedLanguage : selectedLanguage.selectedLanguage,
					platformSelections: data.platformSelections,
					selectedPlatform: selectedPlatform === null ? data.selectedPlatform : selectedPlatform.selectedPlatform,
					partSelections: data.partSelections,
					selectedPart: selectedPart === null ? data.selectedPart : selectedPart.selectedPart,
					styleOptions: data.styleOptions,
					styleSelection: localStorage.getItem('styleSelection') === null ? data.styleSelection : localStorage.getItem('styleSelection'),
					bannerOptions: data.bannerOptions,
					bannerSelection: localStorage.getItem('bannerSelection') === null ? data.bannerSelection : localStorage.getItem('bannerSelection'),
					deadlineOptions: data.deadlineOptions,
					deadlineSelection: localStorage.getItem('deadlineSelection') === null ? data.deadlineSelection : localStorage.getItem('deadlineSelection'),
					designOptions: data.designOptions,
					designSelection: localStorage.getItem('designSelection') === null ? data.designSelection : localStorage.getItem('designSelection'),
					color: color === null ? data.color : color.color,
					content: content === null ? data.content : content.content,
					see: localStorage.getItem('see') === null ? data.see : localStorage.getItem('see'),
					done: localStorage.getItem('done') === null ? data.done : localStorage.getItem('done'),
					feel: localStorage.getItem('feel') === null ? data.feel : localStorage.getItem('feel'),
					auditoria: auditoria === null ? data.auditoria : auditoria.auditoria,
					task: task === null ? data.task : task.task,
					konkurenti: konkurenti === null ? data.konkurenti : konkurenti.konkurenti,
					geography: geography === null ? data.geography : geography.geography,
					shareholders: share === null ? data.shareholders : share.shareholders,
					siblingOptions: data.siblingOptions,
					siblingSelection: localStorage.getItem('siblingSelection') === null ? data.siblingSelection : localStorage.getItem('siblingSelection'),
					description: localStorage.getItem('description') === null ? data.description : localStorage.getItem('description')
				});
			});
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
	handlePlatformSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedPlatform.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedPlatform.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedPlatform, newSelection];
		}

		this.setState({ selectedPlatform: newSelectionArray }, () => {
			let a = { selectedPlatform: this.state.selectedPlatform }
			b = JSON.stringify(a);
			localStorage.setItem('selectedPlatform', b)
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
	handlePartSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedPart.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedPart.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedPart, newSelection];
		}
		this.setState({ selectedPart: newSelectionArray }, () => {
			let a = { selectedPart: this.state.selectedPart }
			b = JSON.stringify(a);
			localStorage.setItem('selectedPart', b)
		});
	}
	handleStyleSelection(e) {
		console.log(this.state.styleSelection);
		this.setState({ styleSelection: [e.target.value] }, () => localStorage.setItem('styleSelection', [this.state.styleSelection]));
	}
	handleDeadlineSelection(e) {
		this.setState({ deadlineSelection: [e.target.value] }, () => localStorage.setItem('deadlineSelection', this.state.deadlineSelection));
	}
	handleBannerSelection(e) {
		this.setState({ bannerSelection: [e.target.value] }, () => localStorage.setItem('bannerSelection', this.state.bannerSelection));
	}
	handleSiblingsSelection(e) {
		this.setState({ siblingSelection: [e.target.value] }, () => localStorage.setItem('siblingSelection', this.state.siblingSelection));
	}
	handleDescriptionChange(e) {
		this.setState({ description: e.target.value }, () => localStorage.setItem('description', this.state.description));
	}
	handleSeeChange(e) {
		this.setState({ see: [e.target.value] }, () => localStorage.setItem('see', this.state.see));
	}
	handleDoneChange(e) {
		this.setState({ done: [e.target.value] }, () => localStorage.setItem('done', this.state.done));
	}
	handleFeelChange(e) {
		this.setState({ feel: [e.target.value] }, () => localStorage.setItem('feel', this.state.feel));
	}
	handleDesignSelection(e) {
		this.setState({ designSelection: [e.target.value] }, () => localStorage.setItem('designSelection', this.state.designSelection));
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
			done: '',
			feel: '',
			task: [{ name: '' }],
			konkurenti: [{ name: '' }],
			auditoria: [{ name: '' }],
			geography: [{ name: '' }],
			shareholders: [{ name: '' }],
			styleAnother: [],
			siblingSelection: [],
			description: '',
			deadlineAnother: [],
			scene: [{ name: '' }],
			client: '',
			mail: '',
			tel: ''
		});
	}
	handleFormSubmit(e) {

		e.preventDefault();
		const formPayload = {
			selectedPlatform: this.state.selectedPlatform,
			selectedLanguage: this.state.selectedLanguage,
			selectedPart: this.state.selectedPart,
			styleSelection: this.state.styleSelection.length > 0 ? this.state.styleSelection : this.state.styleAnother,
			bannerSelection: this.state.bannerSelection,
			deadlineSelection: this.state.deadlineSelection.length > 0 ? this.state.deadlineSelection : this.state.deadlineAnother,
			designSelection: this.state.designSelection,
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
			// styleAnother: this.state.styleAnother,
			//deadlineAnother: this.state.deadlineAnother,
			siblingSelection: this.state.siblingSelection,
			description: this.state.description,
			client: this.state.client,
			mail: this.state.mail,
			tel: this.state.tel
		};
		// console.log(this.state.styleSelection);
		let myjson = JSON.stringify(formPayload);
		console.log(myjson);
		fetch('/api/web', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formPayload)
		}).then(res => {
			console.log(res);
			if (res.status === 200) {
				console.log("Accepted!!!");
				this.setState({modalIsOpen: true});
			}
		})
		console.log("Отправляется...");
		this.handleClearForm(e);
		// console.log(this.state.styleSelection);
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
	handlestyleAnotherNameChange = (idx) => (evt) => {
		const newStyleAnother = this.state.styleAnother.map((styleAnother, sidx) => {
			if (idx !== sidx) return styleAnother;
			return { ...styleAnother, name: evt.target.value };
		});

		this.setState({ styleAnother: newStyleAnother }, () => {
			let a = { styleAnother: this.state.styleAnother }
			b = JSON.stringify(a);
			localStorage.setItem('styleAnother', b)
		});
	}
	handleAddstyleAnother = () => {
		this.setState({ styleAnother: this.state.styleAnother.concat([{ name: '' }]) });
	}

	handledeadlineAnotherNameChange = (idx) => (evt) => {
		const newDeadlineAnother = this.state.deadlineAnother.map((deadlineAnother, sidx) => {
			if (idx !== sidx) return deadlineAnother;
			return { ...deadlineAnother, name: evt.target.value };
		});

		this.setState({ deadlineAnother: newDeadlineAnother }, () => {
			let a = { deadlineAnother: this.state.deadlineAnother }
			b = JSON.stringify(a);
			localStorage.setItem('deadlineAnother', b)
		});
	}
	handleAdddeadlineAnother = () => {
		this.setState({ deadlineAnother: this.state.deadlineAnother.concat([{ name: '' }]) });
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
		return (
			<div>
			<header>
               <div className="uk-container uk-container-expand">
                  <NavBar className="uk-navbar-container uk-visible@m">
                     <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                           <li className="first"><Link to="/"><img src={logo} alt="" /></Link></li>
                        </ul>
                     </div>
                     <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                           <li className="uk-margin-right"><Link to="/" className="home_brief">Home</Link></li>
                           <li className="uk-margin-right"><Link to="/brief" className="mob_brief">Mobile brief</Link></li>
                           <li className="uk-margin-right"><Link to="/brief-web" className="web_brief">Website brief</Link></li>
                        </ul>
                        <a href="#" className="translate-button" rel="ru">RU</a><span className="slash"> | </span><a href="#" className="translate-button" rel="en">EN</a>
                     </div>
                  </NavBar>
                  <div className="mobile-version uk-hidden@m">
                     <div className="boundary-align">
                        <Icon className="uk-button uk-button-default" type="button"></Icon>
                        <Dropdown className="uk-margin-remove" offset={'5'} mode={'click'}>
                           <ul className="uk-nav uk-dropdown-nav">
                              <li><a href="#service" className="translate">Services</a></li>
                              <li className="uk-nav-divider"></li>
                              <li><a href="#process" className="translate">Process</a></li>
                              <li className="uk-nav-divider"></li>
                              <li><a href="#projects" className="translate">Projects</a></li>
                              <li className="uk-nav-divider"></li>
                              <li className="technologies_head"><a href="#tech" className="translate">Technologies</a></li>
                              <li className="uk-nav-divider"></li>
                              <li className="last"><a href="" className="translate">Get in touch</a></li>
                           </ul>
                        </Dropdown>
                     </div>
                  </div>
               </div>
            </header>
				<div className="container">
					<div className="columns">
						<div className="col-lg-9 col-md-12 centered cont">
							<div className="brief">
								<form className="container brief_form" onSubmit={this.handleFormSubmit}>
									<p className="title">Бриф на разработку мобильного приложения</p>
									<p className="title_desc">Пожалуйста, заполните бриф максимально подробно. Это позволит нам определить конкретные сроки и стоимость разработки.</p>
									<p className="title_text">Распечатайте и заполните бриф.Срок оценки брифа 2-3 рабочих дня.</p>
									<hr className="hr_style" />
									<h5 className="form_title">Ваши данные:</h5>
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
									<h5 className="form_title">Сфера деятельности компании</h5>
									<TextArea
										title={''}
										rows={5}
										resize={false}
										content={this.state.description}
										name={'textarea_activity'}
										controlFunc={this.handleDescriptionChange}
										placeholder={''} />
									<h5 className="form_title">Характеристики основных услуг:</h5>
									{this.state.shareholders.map((shareholder, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={shareholder.name}
												controlFunc={this.handleShareholderNameChange(idx)}
												content={shareholder.name}
												placeholder={''}
											/>
											<button type="button" onClick={this.handleRemoveShareholder(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>

										</div>
									))}
									<button type="button" onClick={this.handleAddShareholder} className="small button_add"><i className="icon icon-plus"></i></button>
									<h5 className="form_title">География реализация товаров, услуг:</h5>
									{this.state.geography.map((geography, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={geography.name}
												controlFunc={this.handleGeographyNameChange(idx)}
												content={geography.name}
												placeholder={''}
											/>
											<button type="button" onClick={this.handleRemoveGeography(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
										</div>
									))}
									<button type="button" onClick={this.handleAddGeography} className="small button_add"><i className="icon icon-plus"></i></button>

									<h5 className="form_title">Кто является основным потребителем (целевая аудитория сайта):</h5>
									{this.state.auditoria.map((auditoria, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={auditoria.name}
												controlFunc={this.handleAuditoriaNameChange(idx)}
												content={auditoria.name}
												placeholder={''}
											/>
											<button type="button" onClick={this.handleRemoveAuditoria(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
										</div>
									))}
									<button type="button" onClick={this.handleAddAuditoria} className="small button_add"><i className="icon icon-plus"></i></button>
									<h5 className="form_title">Конкуренты и их приложения (аналоги):</h5>
									<p className="form_text">
										(напишите пожалуйста в формате “название приложение - ссылка на установку”)
						<br />
										Пример: Uber - https://itunes.apple.com/us/app/uber/id368677368?mt=8
						</p>

									{this.state.konkurenti.map((konkurenti, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={konkurenti.name}
												controlFunc={this.handleKonkurentiNameChange(idx)}
												content={konkurenti.name}
												placeholder={''}
											/>
											<button type="button" onClick={this.handleRemoveKonkurenti(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
										</div>
									))}
									<button type="button" onClick={this.handleAddKonkurenti} className="small button_add"><i className="icon icon-plus"></i></button>
									<h5 className="form_title">Задачи, которые должен решать сайт:</h5>
									{this.state.task.map((task, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={task.name}
												controlFunc={this.handleTaskNameChange(idx)}
												content={task.name}
												placeholder={''}
											/>
											<button type="button" onClick={this.handleRemoveTask(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
										</div>
									))}
									<button type="button" onClick={this.handleAddTask} className="small button_add"><i className="icon icon-plus"></i></button>
									<h5 className="form_title">Частота предполагаемых обновлений приложения:</h5>
									<RadioGroup
										setName={'siblings'}
										controlFunc={this.handleSiblingsSelection}
										type={'radio'}
										options={this.state.siblingOptions}
										selectedOptions={this.state.siblingSelection} />
									<h5 className="form_title sub_text">На каких платформах планируете размещать приложение</h5>
									<sub>(пожалуйста отметьте звездочками, что из них приоритетнее: *** - высокий приоритет, ** - средний, * - низкий)
				</sub>
									<br />
									<br />
									<p>Например: <br /> Play Market ***</p>
									<CheckboxGroup
										setName={'selectedPlatform'}
										type={'checkbox'}
										controlFunc={this.handlePlatformSelections}
										options={this.state.platformSelections}
										selectedOptions={this.state.selectedPlatform} />
									<h5 className="form_title">Языковые версии</h5>
									<CheckboxOrRadioGroup
										setName={'selectedLanguage'}
										type={'checkbox'}
										controlFunc={this.handleLanguageSelections}
										options={this.state.languageSelections}
										selectedOptions={this.state.selectedLanguage} />
									<h5 className="form_title">Контент внутри приложения </h5>
									<p>(на примере сайта для вызова такси - список всех заказов, список таксистов что работает в текущую смену и т.п)</p>
									{this.state.content.map((content, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={content.name}
												controlFunc={this.handleContentNameChange(idx)}
												content={content.name}
												placeholder={''}
											/>
											<button type="button" onClick={this.handleRemoveContent(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
										</div>
									))}
									<button type="button" onClick={this.handleAddContent} className="small button_add"><i className="icon icon-plus"></i></button>
									<h5 className="form_title">Кто будет разрабатывать дизайн?</h5>
									<RadioGroup
										setName={'design'}
										controlFunc={this.handleDesignSelection}
										type={'radio'}
										options={this.state.designOptions}
										selectedOptions={this.state.designSelection} />
									<h5 className="form_title">Стиль сайта</h5>
									<RadioGroup
										setName={'style'}
										controlFunc={this.handleStyleSelection}
										type={'radio'}
										options={this.state.styleOptions}
										selectedOptions={this.state.styleSelection} />

									<button type="button" onClick={this.handleAddstyleAnother} className="small btn_another_radio">
										<svg height="30" width="30">
											<circle cx="10" cy="20" r="6.5" stroke="#c1c1c1" strokeWidth="1" fill="#fff" />
										</svg>Другое</button>
									<br />
									{this.state.styleAnother.map((styleAnother, idx) => (
										<div className="item_form" key={idx}>
											<SingleInputAnother
												inputType={'text'}
												name={styleAnother.name}
												controlFunc={this.handlestyleAnotherNameChange(idx)}
												content={styleAnother.name}
												placeholder={''}
											/>

										</div>
									))}

									<h5 className="form_title">Что вы хотите, чтобы пользователь в результате посещения сайта</h5>
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
									<h5 className="form_title">Цветовая гамма</h5>
									<p>(не нужно заполнять, если есть брендбук)</p>
									{this.state.color.map((color, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={color.name}
												controlFunc={this.handleColorNameChange(idx)}
												content={color.name}
												placeholder={''}
											/>
											<button type="button" onClick={this.handleRemoveColor(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
										</div>
									))}
									<button type="button" onClick={this.handleAddColor} className="small button_add"><i className="icon icon-plus"></i></button>
									<h5 className="form_title">Компоненты/окна:</h5>
									<CheckboxGroup
										setName={'selectedPart'}
										type={'checkbox'}
										controlFunc={this.handlePartSelections}
										options={this.state.partSelections}
										selectedOptions={this.state.selectedPart} />

									<h5 className="form_title">Предусматривать ли место под баннерную рекламу (AdMob):</h5>
									<RadioGroup
										setName={'banner'}
										controlFunc={this.handleBannerSelection}
										type={'radio'}
										options={this.state.bannerOptions}
										selectedOptions={this.state.bannerSelection} />

									<h5 className="form_title">Сроки исполнения заказа (сколько готов ждать заказчик):</h5>
									<RadioGroup
										setName={'deadline'}
										controlFunc={this.handleDeadlineSelection}
										type={'radio'}
										options={this.state.deadlineOptions}
										selectedOptions={this.state.deadlineSelection} />
									<button type="button" onClick={this.handleAdddeadlineAnother} className="small btn_another_radio">
										<svg height="30" width="30">
											<circle cx="10" cy="20" r="6.5" stroke="#c1c1c1" strokeWidth="1" fill="#fff" />
										</svg>Другое
					</button>

									<br />

									{this.state.deadlineAnother.map((deadlineAnother, idx) => (
										<div className="item_form" key={idx}>
											<SingleInputAnother
												inputType={'text'}
												name={deadlineAnother.name}
												controlFunc={this.handledeadlineAnotherNameChange(idx)}
												content={deadlineAnother.name}
												placeholder={''}
											/>

										</div>
									))}
									<h5 className="clearfix form_title">Пользовательский сценарий</h5>
									<p className="title_text" >(описать шаги, как посетители  будут взаимодействовать с приложением) Чем больше сценарий, тем лучше мы поймем видение клиента.</p>
									<p className="title_text">На примере Yandex Taxi</p>
									<ol className="title_text">
										<li> Скачал приложение “Yandex Taxi” из Play Marketa</li>
										<li> Запустил приложение, на главной экране увидел карту города с указанием моего месмтоположения</li>
										<li> Нажал на кнопку “ куда?” </li>
										<li> Ввел адрес конечного пункта, затем нажал на кнопку “вызвать такси”</li>
										<li> На карте города, появились таксисты что находятся рядом со мной</li>
										<li> Приложение выбрала самого первого такси</li>
										<li> Появилось сообщение “Водитель И.И.ИВанов на автомобиле Subaru Forester с гос.номером S 1234 A выехал к Вам!” </li>
									</ol>
									<p className="form_title">Сценарий:</p>
									{this.state.scene.map((scene, idx) => (
										<div className="item_form" key={idx}>
											<span className="input_span">{`${idx + 1}.  `}</span>
											<SingleInput
												inputType={'text'}
												name={scene.name}
												controlFunc={this.handleSceneNameChange(idx)}
												content={scene.name}
												placeholder={`Напишите свой сценарий`}
											/>
											<button type="button" onClick={this.handleRemoveScene(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
										</div>
									))}
									<button type="button" onClick={this.handleAddScene} className="small button_add"><i className="icon icon-plus"></i></button>
									<br />
									<br />
									<div className="left">
										<button
											className="button_clear"
											onClick={this.handleClearForm}>Clear form
						</button>
									</div>
									<div className="right">
										<input
											type="submit"
											className="button_submit"
											value="Submit" />
									</div>
									<Modal
										isOpen={this.state.modalIsOpen}
										onAfterOpen={this.afterOpenModal}
										onRequestClose={this.closeModal}
										style={customStyles}
										ariaHideApp={false}
										contentLabel="Accepted"
										>

										<button className="modal_close" onClick={this.closeModal}><i className="icon icon-cross"></i></button>
										<div className="modal_header">
											<h2 className="title">Namba Soft</h2>
										</div>
											<hr/>
										<div className="modal_content">
											<p className="title_desc">Ваш запрос отправлен.<br/> Проверьте свою почту в течение нескольких минут.</p>
										</div>
										<div className="modal_footer">
											<button className="modal_ok" onClick={this.closeModal}>OK</button>
										</div>
									</Modal>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BriefMobile;
