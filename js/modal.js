MicroModal.init({
	// onShow: modal => console.info(`${modal.id} is shown`), // [1]
	// onClose: modal => console.info(`${modal.id} is hidden`), // [2]
	openTrigger: 'data-micromodal-trigger', // [3]
	closeTrigger: 'data-custom-close', // [4]
	disableScroll: true, // [5]
	disableFocus: false, // [6]
	awaitOpenAnimation: false, // [7]
	awaitCloseAnimation: false, // [8]
	debugMode: true // [9]
});


 