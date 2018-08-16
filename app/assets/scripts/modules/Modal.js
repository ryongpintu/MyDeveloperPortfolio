import $ from 'jquery';

class Modal
{


	constructor(){

        this.showModal=$(".btn__signin");
        this.modal =$(".modal");
        this.modalCloseButton=$(".modal-close-btn");
        this.modalSignUpButton =$(".sign_up");
        this.modalSignInButton =$(".sign_in");
        this.modalSignUpDiv =$(".contact-form-sign_up");
        this.modalSignInDiv =$(".contact-form-sign_in");
        this.events();

	}


	events(){

		this.showModal.click(this.toggleTheModal.bind(this));
		this.modalCloseButton.click(this.closeModal.bind(this));
		this.modalSignUpButton.click(this.openSignUpBox.bind(this));
		this.modalSignInButton.click(this.openSignInBox.bind(this));
	}

	toggleTheModal(){

		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal(){

		this.modal.removeClass("modal--is-visible");
	}

	openSignInBox(){

		this.modalSignUpDiv.toggleClass("contact-form-sign_up--is-not-visible");
		this.modalSignInDiv.toggleClass("contact-form-sign_in--is-visible");
	}
	openSignUpBox(){

		this.modalSignUpDiv.toggleClass("contact-form-sign_up--is-not-visible");
		this.modalSignInDiv.toggleClass("contact-form-sign_in--is-visible");
	}

}

export default Modal;