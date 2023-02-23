'use strict';

const $ = require("jquery");

class ValidationInput {
    constructor(inputElementId) {
        this.inputElementId = inputElementId;
        this.$inputElement = $(`#${inputElementId}`);
        this.$newInputElement = this.$inputElement.clone();
        this.$replaceElement = $("<div></div>").append(this.$newInputElement);
        this.replaceInputElement();
    }

    replaceInputElement() {
        this.$inputElement.replaceWith(this.$replaceElement);
    }

    addValidationError(error){
        const errors = [].concat(error)
        const $errorListElement = $("<ul></ul>")
        errors.forEach((err) => {$errorListElement.append(`<li>${err}</li>`)});
        this.$replaceElement.append($errorListElement);
    }
}


module.exports = {ValidationInput};