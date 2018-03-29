import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import SingleInputFeel from '../components/SingleInputFeel';
import SingleInputData from '../components/SingleInputData';
import NavBar from '../components/NavBar';
import Dropdown from '../components/Dropdown';
import Icon from '../components/Icon';
import logo from './../img/logo.png';
import { Link } from "react-router-dom";
// import logo from './../img/logo.png';

// import NavBar from '../components/NavBar';
// import Dropdown from '../components/Dropdown';
// // import Icon from '../components/Icon';

// import {Link} from 'react-router-dom';

let c;

class BriefSite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languageSelectionsSite: [],
			selectedLanguageSite: [],
			styleOptionsSite: [],
			styleSelectionSite: [],
			bannerOptionsSite: [],
			bannerSelectionSite: [],
			deadlineOptionsSite: [],
			deadlineSelectionSite: [],
			counterOptionsSite: [],
			counterSelectionSite: [],
			seeSite: '',
			doneSite: '',
			feelSite: '',
			colorSite: [{ name: '' }],
			contentSite: [{ name: '' }],
			auditoriaSite: [{ name: '' }],
			taskSite: [{ name: '' }],
			konkurentiSite: [{ name: '' }],
			geographySite: [{ name: '' }],
			shareholdersSite: [{ name: '' }],
			sceneSite: [{ name: '' }],
			siblingOptionsSite: [],
			siblingSelectionSite: [],
			descriptionSite: '',
			typeSelectionsSite: [],
			selectedTypeSite: [],
			selectedChapterSite: [],
			chapterSelectionsSite: [],
			chapterAnotherSite: [],
			styleAnotherSite: [],
			impressionSite: '',
			actionCallSite: '',
			componentSelectionsSite: [],
			componentAnotherSite: [],
			selectedComponentSite: [],
			typeAnotherSite: [],
			deadlineAnotherSite: [],
			clientSite: '',
			mailSite: '',
			telSite: ''
		};

		this.handleLanguageSiteSelections = this.handleLanguageSiteSelections.bind(this);
		this.handleComponentSiteSelections = this.handleComponentSiteSelections.bind(this);
		this.handleTypeSiteSelections = this.handleTypeSiteSelections.bind(this);
		this.handleChapterSiteSelections = this.handleChapterSiteSelections.bind(this);
		this.handleBannerSiteSelection = this.handleBannerSiteSelection.bind(this);
		this.handleDeadlineSiteSelection = this.handleDeadlineSiteSelection.bind(this);
		this.handleStyleSiteSelection = this.handleStyleSiteSelection.bind(this);
		this.handleCounterSiteSelection = this.handleCounterSiteSelection.bind(this);
		this.handleSeeSiteChange = this.handleSeeSiteChange.bind(this);
		this.handleDoneSiteChange = this.handleDoneSiteChange.bind(this);
		this.handleFeelSiteChange = this.handleFeelSiteChange.bind(this);
		this.handleClientSiteChange = this.handleClientSiteChange.bind(this);
		this.handleMailSiteChange = this.handleMailSiteChange.bind(this);
		this.handleTelSiteChange = this.handleTelSiteChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleSiblingsSiteSelection = this.handleSiblingsSiteSelection.bind(this);
		this.handleDescriptionSiteChange = this.handleDescriptionSiteChange.bind(this);
		this.handleTypesSiteSelection = this.handleTypesSiteSelection.bind(this);
		this.handleChaptersSiteSelection = this.handleChaptersSiteSelection.bind(this);
		this.handleImpressionSiteChange = this.handleImpressionSiteChange.bind(this);
		this.handleactionCallSiteChange = this.handleactionCallSiteChange.bind(this);

	}

	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {

				let selectedChapterSite = JSON.parse(localStorage.getItem('selectedChapterSite'));
				let selectedTypeSite = JSON.parse(localStorage.getItem('selectedTypeSite'));
				let selectedComponentSite = JSON.parse(localStorage.getItem('selectedComponentSite'));
				let selectedLanguageSite = JSON.parse(localStorage.getItem('selectedLanguageSite'));
				let colorSite = JSON.parse(localStorage.getItem('colorSite'));
				let contentSite = JSON.parse(localStorage.getItem('contentSite'));
				let auditoriaSite = JSON.parse(localStorage.getItem('auditoriaSite'));
				let taskSite = JSON.parse(localStorage.getItem('taskSite'));
				let konkurentiSite = JSON.parse(localStorage.getItem('konkurentiSite'));
				let geographySite = JSON.parse(localStorage.getItem('geographySite'));
				let shareSite = JSON.parse(localStorage.getItem('shareholdersSite'));
				let sceneSite = JSON.parse(localStorage.getItem('sceneSite'));
				let styleAnotherSite = JSON.parse(localStorage.getItem('styleAnotherSite'));
				let deadlineAnotherSite = JSON.parse(localStorage.getItem('deadlineAnotherSite'));
				let componentAnotherSite = JSON.parse(localStorage.getItem('componentAnotherSite'));
				let typeAnotherSite = JSON.parse(localStorage.getItem('typeAnotherSite'));
				let chapterAnotherSite = JSON.parse(localStorage.getItem('chapterAnotherSite'));
				this.setState({
					languageSelectionsSite: data.languageSelectionsSite,
					selectedLanguageSite: selectedLanguageSite === null ? data.selectedLanguageSite : selectedLanguageSite.selectedLanguageSite,
					styleOptionsSite: data.styleOptionsSite,
					styleSelectionSite: this.state.styleSelectionSite.length > 0 ? this.state.styleSelectionSite : this.state.styleAnotherSite,
					bannerOptionsSite: data.bannerOptionsSite,
					bannerSelectionSite: localStorage.getItem('bannerSelectionSite') === null ? data.bannerSelectionSite : localStorage.getItem('bannerSelectionSite'),
					deadlineOptionsSite: data.deadlineOptionsSite,
					deadlineSelectionSite: this.state.deadlineSelectionSite.length > 0 ? this.state.deadlineSelectionSite : this.state.deadlineSelectionSite,
					counterOptionsSite: data.counterOptionsSite,
					deadlineAnotherSite: deadlineAnotherSite === null ? data.deadlineAnotherSite : deadlineAnotherSite.deadlineAnotherSite,
					counterSelectionSite: localStorage.getItem('counterSelectionSite') === null ? data.counterSelectionSite : localStorage.getItem('counterSelectionSite'),
					colorSite: colorSite === null ? data.colorSite : colorSite.colorSite,
					contentSite: contentSite === null ? data.contentSite : contentSite.contentSite,
					seeSite: localStorage.getItem('seeSite') === null ? data.seeSite : localStorage.getItem('seeSite'),
					doneSite: localStorage.getItem('doneSite') === null ? data.doneSite : localStorage.getItem('doneSite'),
					feelSite: localStorage.getItem('feelSite') === null ? data.feelSite : localStorage.getItem('feelSite'),
					clientSite: localStorage.getItem('clientSite') === null ? data.clientSite : localStorage.getItem('clientSite'),
					mailSite: localStorage.getItem('mailSite') === null ? data.mailSite : localStorage.getItem('mailSite'),
					telSite: localStorage.getItem('telSite') === null ? data.telSite : localStorage.getItem('telSite'),
					auditoriaSite: auditoriaSite === null ? data.auditoriaSite : auditoriaSite.auditoriaSite,
					taskSite: taskSite === null ? data.taskSite : taskSite.taskSite,
					konkurentiSite: konkurentiSite === null ? data.konkurentiSite : konkurentiSite.konkurentiSite,
					geographySite: geographySite === null ? data.geographySite : geographySite.geographySite,
					shareholdersSite: shareSite === null ? data.shareholdersSite : shareSite.shareholdersSite,
					sceneSite: sceneSite === null ? data.sceneSite : sceneSite.sceneSite,
					siblingOptionsSite: data.siblingOptionsSite,
					siblingSelectionSite: localStorage.getItem('siblingSelectionSite') === null ? data.siblingSelectionSite : localStorage.getItem('siblingSelectionSite'),
					descriptionSite: localStorage.getItem('descriptionSite') === null ? data.descriptionSite : localStorage.getItem('descriptionSite'),
					typeSelectionsSite: data.typeSelectionsSite,
					selectedTypeSite: selectedTypeSite === null ? data.selectedTypeSite : selectedTypeSite.selectedTypeSite,
					selectedChapterSite: selectedChapterSite === null ? data.selectedChapterSite : selectedChapterSite.selectedChapterSite,
					chapterSelectionsSite: data.chapterSelectionsSite,
					impressionSite: localStorage.getItem('impressionSite') === null ? data.impressionSite : localStorage.getItem('impressionSite'),
					actionCallSite: localStorage.getItem('actionCallSite') === null ? data.actionCallSite : localStorage.getItem('actionCallSite'),
					componentSelectionsSite: data.componentSelectionsSite,
					selectedComponentSite: selectedComponentSite === null ? data.selectedComponentSite : selectedComponentSite.selectedComponentSite,
					styleAnotherSite: styleAnotherSite === null ? data.styleAnotherSite : styleAnotherSite.styleAnotherSite,
					componentAnotherSite: componentAnotherSite === null ? data.componentAnotherSite : componentAnotherSite.componentAnotherSite,
					typeAnotherSite: typeAnotherSite === null ? data.typeAnotherSite : typeAnotherSite.typeAnotherSite,
					chapterAnotherSite: chapterAnotherSite === null ? data.chapterAnotherSite : chapterAnotherSite.chapterAnotherSite
				});
			});
	}

	handleLanguageSiteSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedLanguageSite.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedLanguageSite.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedLanguageSite, newSelection];
		}
		this.setState({ selectedLanguageSite: newSelectionArray }, () => {
			let a = { selectedLanguageSite: this.state.selectedLanguageSite }
			c = JSON.stringify(a);
			localStorage.setItem('selectedLanguageSite', c)
		});
	}

	handleComponentSiteSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedComponentSite.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedComponentSite.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedComponentSite, newSelection];
		}
		this.setState({ selectedComponentSite: newSelectionArray }, () => {
			let a = { selectedComponentSite: this.state.selectedComponentSite }
			c = JSON.stringify(a);
			localStorage.setItem('selectedComponentSite', c)
		});
	}

	handleTypeSiteSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedTypeSite.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedTypeSite.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedTypeSite, newSelection];
		}
		this.setState({ selectedTypeSite: newSelectionArray }, () => {
			let a = { selectedTypeSite: this.state.selectedTypeSite }
			c = JSON.stringify(a);
			localStorage.setItem('selectedTypeSite', c)
		});
	}

	handleChapterSiteSelections(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if (this.state.selectedChapterSite.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedChapterSite.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedChapterSite, newSelection];
		}
		this.setState({ selectedChapterSite: newSelectionArray }, () => {
			let a = { selectedChapterSite: this.state.selectedChapterSite }
			c = JSON.stringify(a);
			localStorage.setItem('selectedChapterSite', c)
		});
	}

	handleStyleSiteSelection(e) {
		this.setState({ styleSelectionSite: [e.target.value] }, () => { localStorage.setItem('styleSelectionSite', this.state.styleSelectionSite) });
	}

	handleDeadlineSiteSelection(e) {
		this.setState({ deadlineSelectionSite: [e.target.value] }, () => { localStorage.setItem('deadlineSelectionSite', this.state.deadlineSelectionSite) });
	}
	handleBannerSiteSelection(e) {
		this.setState({ bannerSelectionSite: [e.target.value] }, () => { localStorage.setItem('bannerSelectionSite', this.state.bannerSelectionSite) });
	}
	handleSiblingsSiteSelection(e) {
		this.setState({ siblingSelectionSite: [e.target.value] }, () => { localStorage.setItem('updateSite', this.state.siblingSelectionSite) });
	}
	handleTypesSiteSelection(e) {
		this.setState({ typeSelectionSite: [e.target.value] }, () => { localStorage.setItem('typeSite', this.state.typeSelectionSite) });
	}
	handleChaptersSiteSelection(e) {
		this.setState({ chapterSelectionSite: [e.target.value] }, () => { localStorage.setItem('chapterSite', this.state.chapterSelectionSite) });
	}
	handleDescriptionSiteChange(e) {
		this.setState({ descriptionSite: e.target.value }, () => { localStorage.setItem('descriptionSite', this.state.descriptionSite) });
	}

	handleImpressionSiteChange(e) {
		this.setState({ impressionSite: e.target.value }, () => { localStorage.setItem('impressionSite', this.state.impressionSite) });
	}

	handleactionCallSiteChange(e) {
		this.setState({ actionCallSite: e.target.value }, () => { localStorage.setItem('actionCallSite', this.state.actionCallSite) });
	}

	handleSeeSiteChange(e) {
		this.setState({ seeSite: e.target.value }, () => { localStorage.setItem('seeSite', this.state.seeSite)});
	}
	handleDoneSiteChange(e) {
		this.setState({ doneSite: e.target.value }, () => { localStorage.setItem('doneSite', this.state.doneSite) });
	}
	handleFeelSiteChange(e) {
		this.setState({ feelSite: e.target.value }, () => { localStorage.setItem('feelSite', this.state.feelSite) });
	}
	handleClientSiteChange(e) {
		this.setState({ clientSite: e.target.value }, () => { localStorage.setItem('clientSite', this.state.clientSite) });
	}
	handleMailSiteChange(e) {
		this.setState({ mailSite: e.target.value }, () => { localStorage.setItem('mailSite', this.state.mailSite) });
	}
	handleTelSiteChange(e) {
		this.setState({ telSite: e.target.value }, () => { localStorage.setItem('telSite', this.state.telSite) });
	}
	handleCounterSiteSelection(e) {
		this.setState({ counterSelectionSite: [e.target.value] }, () => { localStorage.setItem('counterSelectionSite', this.state.counterSelectionSite) });
	}
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			selectedLanguageSite: [],
			styleSelectionSite: [],
			deadlineSelectionSite: [],
			bannerSelectionSite: [],
			counterSelectionSite: [],
			colorSite: [{ name: '' }],
			contentSite: [{ name: '' }],
			seeSite: '',
			doneSite: '',
			feelSite: '',
			taskSite: [{ name: '' }],
			konkurentiSite: [{ name: '' }],
			auditoriaSite: [{ name: '' }],
			geographySite: [{ name: '' }],
			shareholdersSite: [{ name: '' }],
			sceneSite: [{ name: '' }],
			siblingSelectionSite: [],
			descriptionSite: '',
			typeSelectionSite: '',
			typeOptionsSite: '',
			styleAnotherSite: [],
			impressionSite: '',
			actionCallSite: '',
			selectedComponentSite: [],
			selectedTypeSite: [],
			selectedChapterSite: [],
			chapterAnotherSite: [],
			componentAnotherSite: [],
			typeAnotherSite: [],
			deadlineAnotherSite: [],
			clientSite: '',
			mailSite: '',
			telSite: ''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();



		const formPayload = {
			selectedLanguageSite: this.state.selectedLanguageSite,
			styleSelectionSite: this.state.styleSelectionSite,
			bannerSelectionSite: this.state.bannerSelectionSite,
			deadlineSelectionSite: this.state.deadlineSelectionSite,
			counterSelectionSite: this.state.counterSelectionSite,
			colorSite: this.state.colorSite,
			contentSite: this.state.contentSite,
			seeSite: this.state.seeSite,
			doneSite: this.state.doneSite,
			feelSite: this.state.feelSite,
			taskSite: this.state.taskSite,
			konkurentiSite: this.state.konkurentiSite,
			auditoriaSite: this.state.auditoriaSite,
			geographySite: this.state.geographySite,
			shareholdersSite: this.state.shareholdersSite,
			sceneSite: this.state.sceneSite,
			siblingSelectionSite: this.state.siblingSelectionSite,
			descriptionSite: this.state.descriptionSite,
			typeSelectionSite: this.state.typeSelectionSite,
			typeOptionsSite: this.state.typeOptionsSite,
			styleAnotherSite: this.state.styleAnotherSite,
			impressionSite: this.state.impressionSite,
			actionCallSite: this.state.actionCallSite,
			selectedComponentSite: this.state.selectedComponentSite,
			selectedTypeSite: this.state.selectedTypeSite,
			typeAnotherSite: this.state.typeAnotherSite,
			selectedChapterSite: this.state.selectedChapterSite,
			chapterAnotherSite: this.state.chapterAnotherSite,
			deadlineAnotherSite: this.state.deadlineAnotherSite,
			clientSite: this.state.clientSite,
			mailSite: this.state.mailSite,
			telSite: this.state.telSite
		};

		let jsonSite = [];
		jsonSite = JSON.stringify(formPayload);
		console.log(jsonSite);

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

	handleContentSiteNameChange = (idx) => (evt) => {
		const newContent = this.state.contentSite.map((contentSite, sidx) => {
			if (idx !== sidx) return contentSite;
			return { ...contentSite, name: evt.target.value };
		});

		this.setState({ contentSite: newContent }, () => {
			let a = { contentSite: this.state.contentSite }
			c = JSON.stringify(a);
			localStorage.setItem('contentSite', c)
		});
	}
	handleAddContentSite = () => {
		this.setState({ contentSite: this.state.contentSite.concat([{ name: '' }]) });
	}

	handleRemoveContentSite = (idx) => () => {
		this.setState({ contentSite: this.state.contentSite.filter((s, sidx) => idx !== sidx) });
	}

	handleColorSiteNameChange = (idx) => (evt) => {
		const newColor = this.state.colorSite.map((colorSite, sidx) => {
			if (idx !== sidx) return colorSite;
			return { ...colorSite, name: evt.target.value };
		});

		this.setState({ colorSite: newColor }, () => {
			let a = { colorSite: this.state.colorSite }
			c = JSON.stringify(a);
			localStorage.setItem('colorSite', c)
		});
	}
	handleAddColorSite = () => {
		this.setState({ colorSite: this.state.colorSite.concat([{ name: '' }]) });
	}

	handleRemoveColorSite = (idx) => () => {
		this.setState({ colorSite: this.state.colorSite.filter((s, sidx) => idx !== sidx) });
	}
	handleShareholderSiteNameChange = (idx) => (evt) => {
		const newShareholders = this.state.shareholdersSite.map((shareholderSite, sidx) => {
			if (idx !== sidx) return shareholderSite;
			return { ...shareholderSite, name: evt.target.value };
		});

		this.setState({ shareholdersSite: newShareholders }, () => {
			let a = { shareholdersSite: this.state.shareholdersSite}
			c = JSON.stringify(a);
			localStorage.setItem('shareholdersSite', c)
		});
	}
	handleAddShareholderSite = () => {
		this.setState({ shareholdersSite: this.state.shareholdersSite.concat([{ name: '' }]) });
	}

	handleRemoveShareholderSite = (idx) => () => {
		this.setState({ shareholdersSite: this.state.shareholdersSite.filter((s, sidx) => idx !== sidx) });
	}


	handleStyleAnotherSiteNameChange = (idx) => (evt) => {
		const newShareholders = this.state.styleAnotherSite.map((styleAnotherSite, sidx) => {
			if (idx !== sidx) return styleAnotherSite;
			return { ...styleAnotherSite, name: evt.target.value };
		});

		this.setState({ styleAnotherSite: newShareholders }, () => {
			let a = { styleAnotherSite: this.state.styleAnotherSite }
			c = JSON.stringify(a);
			localStorage.setItem('styleAnotherSite', c)
		});
	}
	handleAddstyleAnotherSite = () => {
		this.setState({ styleAnotherSite: this.state.styleAnotherSite.concat([{ name: '' }]) });
	}

	handleDeadlineAnotherSiteNameChange = (idx) => (evt) => {
		const newShareholders = this.state.deadlineAnotherSite.map((deadlineAnotherSite, sidx) => {
			if (idx !== sidx) return deadlineAnotherSite;
			return { ...deadlineAnotherSite, name: evt.target.value };
		});

		this.setState({ deadlineAnotherSite: newShareholders }, () => {
			let a = { deadlineAnotherSite: this.state.deadlineAnotherSite }
			c = JSON.stringify(a);
			localStorage.setItem('deadlineAnotherSite', c)
		});
	}
	handleAdddeadlineAnotherSite = () => {
		this.setState({ deadlineAnotherSite: this.state.deadlineAnotherSite.concat([{ name: '' }]) });
	}

	handleComponentAnotherSiteNameChange = (idx) => (evt) => {
		const newShareholders = this.state.componentAnotherSite.map((componentAnotherSite, sidx) => {
			if (idx !== sidx) return componentAnotherSite;
			return { ...componentAnotherSite, name: evt.target.value };
		});

		this.setState({ componentAnotherSite: newShareholders }, () => {
			let a = { componentAnotherSite: this.state.componentAnotherSite }
			c = JSON.stringify(a);
			localStorage.setItem('componentAnotherSite', c)
		});
	}

	handleAddComponentAnotherSite = () => {
		this.setState({ componentAnotherSite: this.state.componentAnotherSite.concat([{ name: '' }]) });
	}

	handleTypeAnotherSiteNameChange = (idx) => (evt) => {
		const newShareholders = this.state.typeAnotherSite.map((typeAnotherSite, sidx) => {
			if (idx !== sidx) return typeAnotherSite;
			return { ...typeAnotherSite, name: evt.target.value };
		});

		this.setState({ typeAnotherSite: newShareholders }, () => {
			let a = { typeAnotherSite: this.state.typeAnotherSite}
			c = JSON.stringify(a);
			localStorage.setItem('typeAnotherSite', c)
		});
	}

	handleAddTypeAnotherSite = () => {
		this.setState({ typeAnotherSite: this.state.typeAnotherSite.concat([{ name: '' }]) });
	}

	handleChapterAnotherSiteNameChange = (idx) => (evt) => {
		const newShareholders = this.state.chapterAnotherSite.map((chapterAnotherSite, sidx) => {
			if (idx !== sidx) return chapterAnotherSite;
			return { ...chapterAnotherSite, name: evt.target.value };
		});

		this.setState({ chapterAnotherSite: newShareholders }, () => {
			let a = { chapterAnotherSite: this.state.chapterAnotherSite }
			c = JSON.stringify(a);
			localStorage.setItem('chapterAnotherSite', c)
		});
	}

	handleAddChapterAnotherSite = () => {
		this.setState({ chapterAnotherSite: this.state.chapterAnotherSite.concat([{ name: '' }]) });
	}

	handleAuditoriaSiteNameChange = (idx) => (evt) => {
		const newAuditoria = this.state.auditoriaSite.map((auditoriaSite, sidx) => {
			if (idx !== sidx) return auditoriaSite;
			return { ...auditoriaSite, name: evt.target.value };
		});

		this.setState({ auditoriaSite: newAuditoria }, () => {
			let a = { auditoriaSite: this.state.auditoriaSite }
			c = JSON.stringify(a);
			localStorage.setItem('auditoriaSite', c)
		});
	}
	handleAddAuditoriaSite = () => {
		this.setState({ auditoriaSite: this.state.auditoriaSite.concat([{ name: '' }]) });
	}

	handleRemoveAuditoriaSite = (idx) => () => {
		this.setState({ auditoriaSite: this.state.auditoriaSite.filter((s, sidx) => idx !== sidx) });
	}

	handleTaskSiteNameChange = (idx) => (evt) => {
		const newTask = this.state.taskSite.map((taskSite, sidx) => {
			if (idx !== sidx) return taskSite;
			return { ...taskSite, name: evt.target.value };
		});

		this.setState({ taskSite: newTask }, () => {
			let a = { taskSite: this.state.taskSite }
			c = JSON.stringify(a);
			localStorage.setItem('taskSite', c)
		});
	}
	handleAddTaskSite = () => {
		this.setState({ taskSite: this.state.taskSite.concat([{ name: '' }]) });
	}

	handleRemoveTaskSite = (idx) => () => {
		this.setState({ taskSite: this.state.taskSite.filter((s, sidx) => idx !== sidx) });
	}

	handleKonkurentiSiteNameChange = (idx) => (evt) => {
		const newKonkurenti = this.state.konkurentiSite.map((konkurentiSite, sidx) => {
			if (idx !== sidx) return konkurentiSite;
			return { ...konkurentiSite, name: evt.target.value };
		});

		this.setState({ konkurentiSite: newKonkurenti }, () => {
			let a = { konkurentiSite: this.state.konkurentiSite }
			c = JSON.stringify(a);
			localStorage.setItem('konkurentiSite', c)
		});
	}
	handleAddKonkurentiSite = () => {
		this.setState({ konkurentiSite: this.state.konkurentiSite.concat([{ name: '' }]) });
	}

	handleRemoveKonkurentiSite = (idx) => () => {
		this.setState({ konkurentiSite: this.state.konkurentiSite.filter((s, sidx) => idx !== sidx) });
	}

	handleSceneSiteNameChange = (idx) => (evt) => {
		const newScene = this.state.sceneSite.map((sceneSite, sidx) => {
			if (idx !== sidx) return sceneSite;
			return { ...sceneSite, name: evt.target.value };
		});
		this.setState({ sceneSite: newScene }, () => {
			let a = { sceneSite: this.state.sceneSite }
			c = JSON.stringify(a);
			localStorage.setItem('sceneSite', c)
		});
	}
	handleAddSceneSite = () => {
		this.setState({ sceneSite: this.state.sceneSite.concat([{ name: '' }]) });
	}

	handleRemoveSceneSite = (idx) => () => {
		this.setState({ sceneSite: this.state.sceneSite.filter((s, sidx) => idx !== sidx) });
	}



	handleGeographySiteNameChange = (idx) => (evt) => {
		const newGeography = this.state.geographySite.map((geographySite, sidx) => {
			if (idx !== sidx) return geographySite;
			return { ...geographySite, name: evt.target.value };
		});

		this.setState({ geographySite: newGeography }, () => {
			let a = { geographySite: this.state.geographySite }
			c = JSON.stringify(a);
			localStorage.setItem('geographySite', c)
		});
	}

	handleAddGeographySite = () => {
		this.setState({ geographySite: this.state.geographySite.concat([{ name: '' }]) });
	}

	handleRemoveGeographySite = (idx) => () => {
		this.setState({ geographySite: this.state.geographySite.filter((s, sidx) => idx !== sidx) });
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
									
								<h1 className="title">Бриф на разработку сайта</h1>
								<p className="title_desc">Пожалуйста, заполните бриф максимально подробно. Это позволит нам определить конкретные сроки и стоимость разработки.</p>
								<p className="title_text">Распечатайте и заполните бриф. Срок оценки брифа 2-3 рабочих дня.</p>
								<hr className="hr_style" />
								<h5 className="title_desc">Ваши данные:</h5>
								<p className="span_p span_p_name">Имя:</p>
								<SingleInputData
									inputType={'text'}
									title={''}
									name={'clientSite'}
									controlFunc={this.handleClientSiteChange}
									content={this.state.clientSite}
									placeholder={''} />
								<p className="span_p span_p_do text-left">E-mail:</p>
								<SingleInputData
									inputType={'text'}
									title={''}
									name={'mailSite'}
									controlFunc={this.handleMailSiteChange}
									content={this.state.mailSite}
									placeholder={''} />
								<p className="span_p span_p_tel">Телефон:</p>
								<SingleInputData
									inputType={'text'}
									title={''}
									name={'telSite'}
									controlFunc={this.handleTelSiteChange}
									content={this.state.telSite}
									placeholder={''} />
								<h5 className="title_desc">Сфера деятельности компании:</h5>
								<TextArea
									title={''}
									rows={5}
									resize={false}
									content={this.state.descriptionSite}
									name={'textarea_activity'}
									controlFunc={this.handleDescriptionSiteChange}
									placeholder={''} />

								<h5 className="title_desc">Характеристики основных услуг:</h5>
								{this.state.shareholdersSite.map((shareholderSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={shareholderSite.name}
											controlFunc={this.handleShareholderSiteNameChange(idx)}
											content={shareholderSite.name}
											placeholder={``}
										/>
										<button type="button" onClick={this.handleRemoveShareholderSite(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddShareholderSite} className="small button_add"><i className="icon icon-plus"></i></button>

								<h5 className="title_desc">География реализация товаров, услуг:</h5>
								{this.state.geographySite.map((geographySite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={geographySite.name}
											controlFunc={this.handleGeographySiteNameChange(idx)}
											content={geographySite.name}
											placeholder={``}
										/>
										<button type="button" onClick={this.handleRemoveGeographySite(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddGeographySite} className="small button_add"><i className="icon icon-plus"></i></button>

								<h5 className="title_desc">Кто является основным потребителем (целевая аудитория сайта):</h5>
								{this.state.auditoriaSite.map((auditoriaSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={auditoriaSite.name}
											controlFunc={this.handleAuditoriaSiteNameChange(idx)}
											content={auditoriaSite.name}
											placeholder={``}
										/>
										<button type="button" onClick={this.handleRemoveAuditoriaSite(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddAuditoriaSite} className="small button_add"><i className="icon icon-plus"></i></button>

								<h5 className="title_desc">Конкуренты, их веб-ресурсы:</h5>
								{this.state.konkurentiSite.map((konkurentiSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={konkurentiSite.name}
											controlFunc={this.handleKonkurentiSiteNameChange(idx)}
											content={konkurentiSite.name}
											placeholder={`Название и url:  `}
										/>
										<button type="button" onClick={this.handleRemoveKonkurentiSite(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddKonkurentiSite} className="small button_add"><i className="icon icon-plus"></i></button>

								<h5 className="title_desc">Задачи, которые должен решать сайт:</h5>
								{this.state.taskSite.map((taskSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={taskSite.name}
											controlFunc={this.handleTaskSiteNameChange(idx)}
											content={taskSite.name}
											placeholder={``}
										/>
										<button type="button" onClick={this.handleRemoveTaskSite(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddTaskSite} className="small button_add"><i className="icon icon-plus"></i></button>

								<h5 className="title_desc">Тип сайта:</h5>
								<CheckboxGroup
									setName={'selectedTypeSite'}
									type={'checkbox'}
									controlFunc={this.handleTypeSiteSelections}
									options={this.state.typeSelectionsSite}
									selectedOptions={this.state.selectedTypeSite} />

								<button type="button" onClick={this.handleAddTypeAnotherSite} className="btn_another_check">
									<svg width="15" height="15" className="svg_check">
										<rect width="15" height="15" className="rect_check" />
									</svg>Другое
				</button>
								{this.state.typeAnotherSite.map((typeAnotherSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={typeAnotherSite.name}
											controlFunc={this.handleTypeAnotherSiteNameChange(idx)}
											content={typeAnotherSite.name}
											placeholder={''}
										/>

									</div>
								))}

								<h5 className="title_desc">Основные разделы сайта (описать точную структуру разделов сайта):</h5>
								<CheckboxGroup
									setName={'selectedChapterSite'}
									type={'checkbox'}
									controlFunc={this.handleChapterSiteSelections}
									options={this.state.chapterSelectionsSite}
									selectedOptions={this.state.selectedChapterSite} />
								<button type="button" onClick={this.handleAddChapterAnotherSite} className="btn_another_check">
									<svg width="15" height="15" className="svg_check">
										<rect width="15" height="15" className="rect_check" />
									</svg>Другое
				</button>
								{this.state.chapterAnotherSite.map((chapterAnotherSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={chapterAnotherSite.name}
											controlFunc={this.handleChapterAnotherSiteNameChange(idx)}
											content={chapterAnotherSite.name}
											placeholder={''}
										/>

									</div>
								))}


								<h5 className="title_desc">Частота предполагаемых обновлений сайта:</h5>
								<CheckboxOrRadioGroup
									setName={'siblingsSite'}
									controlFunc={this.handleSiblingsSiteSelection}
									type={'radio'}
									options={this.state.siblingOptionsSite}
									selectedOptions={this.state.siblingSelectionSite} />
								<h5 className="title_desc">Языковые версии сайта:</h5>
								<CheckboxGroup
									setName={'selectedLanguageSite'}
									type={'checkbox'}
									controlFunc={this.handleLanguageSiteSelections}
									options={this.state.languageSelectionsSite}
									selectedOptions={this.state.selectedLanguageSite} />

								<h5 className="title_desc">Контент сайта</h5>
								<p>(На примере сайта для публикации новостей. На сайте будут новости, которые будут состоять из заголовка и описания)</p>
								{this.state.contentSite.map((contentSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={contentSite.name}
											controlFunc={this.handleContentSiteNameChange(idx)}
											content={contentSite.name}
											placeholder={``}
										/>
										<button type="button" onClick={this.handleRemoveContentSite(idx)} className="small button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddContentSite} className="small button_add"><i className="icon icon-plus"></i></button>

								<h5 className="title_desc">Стиль сайта:</h5>
								<CheckboxOrRadioGroup
									setName={'styleSite'}
									controlFunc={this.handleStyleSiteSelection}
									type={'radio'}
									options={this.state.styleOptionsSite}
									selectedOptions={this.state.styleSelectionSite} />
								<button type="button" onClick={this.handleAddstyleAnotherSite} className="small btn_another_radio">
									<svg height="30" width="30">
										<circle cx="10" cy="20" r="6.5" stroke="#c1c1c1" strokeWidth="1" fill="#fff" />
									</svg>Другое
				</button>
								{this.state.styleAnotherSite.map((styleAnotherSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={styleAnotherSite.name}
											controlFunc={this.handleStyleAnotherSiteNameChange(idx)}
											content={styleAnotherSite.name}
											placeholder={''}
										/>

									</div>
								))}

								<h5 className="title_desc">Впечатление, которое должен произвести сайт на пользователя:</h5>
								<TextArea
									title={''}
									rows={5}
									resize={false}
									content={this.state.impressionSite}
									name={'impressionSite'}
									controlFunc={this.handleImpressionSiteChange}
									placeholder={''} />

								<h5 className="title_desc">Какое основное сообщение необходимо довести до сознания потребителя (призыв к действию):</h5>
								<TextArea
									title={''}
									rows={5}
									resize={false}
									content={this.state.actionCallSite}
									name={'actionCallSite'}
									controlFunc={this.handleactionCallSiteChange}
									placeholder={''} />

								<h5 className="title_desc">Что вы хотите, чтобы пользователь в результате посещения сайта</h5>
								<p className="span_p span_p_see">Увидел:</p>
								<SingleInputFeel
									inputType={'text'}
									title={''}
									name={'seeSite'}
									controlFunc={this.handleSeeSiteChange}
									content={this.state.seeSite}
									placeholder={''} />
								<p className="span_p span_p_do text-left">Сделал:</p>
								<SingleInputFeel
									inputType={'text'}
									title={''}
									name={'doneSite'}
									controlFunc={this.handleDoneSiteChange}
									content={this.state.doneSite}
									placeholder={''} />
								<p className="span_p">Почувствовал:</p>
								<SingleInputFeel
									inputType={'text'}
									title={''}
									name={'feelSite'}
									controlFunc={this.handleFeelSiteChange}
									content={this.state.feelSite}
									placeholder={''} />

								<h5 className="title_desc">Цветовая гамма</h5>
								<p className="title_text">(Не нужно заполнять, если есть брендбук)</p>
								{this.state.colorSite.map((colorSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={colorSite.name}
											controlFunc={this.handleColorSiteNameChange(idx)}
											content={colorSite.name}
											placeholder={``}
										/>
										<button type="button" onClick={this.handleRemoveColorSite(idx)} className="button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddColorSite} className="button_add"><i className="icon icon-plus"></i></button>

								<h5 className="title_desc">Компоненты сайта:</h5>
								<CheckboxGroup
									setName={'selectedComponentSite'}
									controlFunc={this.handleComponentSiteSelections}
									type={'checkbox'}
									selectedOptions={this.state.selectedComponentSite}
									options={this.state.componentSelectionsSite} />
								<button type="button" onClick={this.handleAddComponentAnotherSite} className="btn_another_check">
									<svg width="15" height="15" className="svg_check">
										<rect width="15" height="15" className="rect_check" />
									</svg>Другое
				</button>
								{this.state.componentAnotherSite.map((componentAnotherSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={componentAnotherSite.name}
											controlFunc={this.handleComponentAnotherSiteNameChange(idx)}
											content={componentAnotherSite.name}
											placeholder={''}
										/>

									</div>
								))}

								<h5 className="title_desc">Предусматривать ли место под баннерную рекламу:</h5>
								<CheckboxOrRadioGroup
									setName={'bannerSelectionSite'}
									controlFunc={this.handleBannerSiteSelection}
									type={'radio'}
									options={this.state.bannerOptionsSite}
									selectedOptions={this.state.bannerSelectionSite} />

								<h5 className="title_desc">Предусматривать ли место для счетчиков посещений:</h5>
								<CheckboxOrRadioGroup
									setName={'counterSelectionSite'}
									controlFunc={this.handleCounterSiteSelection}
									type={'radio'}
									options={this.state.counterOptionsSite}
									selectedOptions={this.state.counterSelectionSite} />


								<h5 className="title_desc">Срок исполнения заказа (сколько готов ждать заказчик):</h5>
								<CheckboxOrRadioGroup
									setName={'deadlineSelectionSite'}
									controlFunc={this.handleDeadlineSiteSelection}
									type={'radio'}
									options={this.state.deadlineOptionsSite}
									selectedOptions={this.state.deadlineSelectionSite} />
								<button type="button" onClick={this.handleAdddeadlineAnotherSite} className="small btn_another_radio">
									<svg height="30" width="30">
										<circle cx="10" cy="20" r="6.5" stroke="#c1c1c1" strokeWidth="1" fill="#fff" />
									</svg>Другое
				</button>
								{this.state.deadlineAnotherSite.map((deadlineAnotherSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={deadlineAnotherSite.name}
											controlFunc={this.handleDeadlineAnotherSiteNameChange(idx)}
											content={deadlineAnotherSite.name}
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
								{this.state.sceneSite.map((sceneSite, idx) => (
									<div className="item_form" key={idx}>
										<span className="input_span">{`${idx + 1}  `}</span>
										<SingleInput
											inputType={'text'}
											name={sceneSite.name}
											controlFunc={this.handleSceneSiteNameChange(idx)}
											content={sceneSite.name}
											placeholder={``}
										/>
										<button type="button" onClick={this.handleRemoveSceneSite(idx)} className="button_minus"><i className="icon icon-minus"></i></button>
									</div>
								))}
								<button type="button" onClick={this.handleAddSceneSite} className="button_add"><i className="icon icon-plus"></i></button>

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
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default BriefSite;
