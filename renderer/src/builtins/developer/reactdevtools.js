import Builtin from "../../structs/builtin";
import Modals from "../../ui/modals";
import {Strings, IPC} from "modules";

const fs = require("fs");
const path = require("path");

export default new class ReactDevTools extends Builtin {
    get name() {return "ReactDevTools";}
    get category() {return "developer";}
    get id() {return "reactDevTools";}

    async enabled() {
        this.showModal();
    }

    async disabled() {
        this.showModal();
    }

    showModal() {
        if (!this.initialized) return;
        Modals.showConfirmationModal(Strings.Modals.additionalInfo, Strings.Modals.restartPrompt, {
            confirmText: Strings.Modals.restartNow,
            cancelText: Strings.Modals.restartLater,
            onConfirm: () => IPC.relaunch()
        });
    }
};