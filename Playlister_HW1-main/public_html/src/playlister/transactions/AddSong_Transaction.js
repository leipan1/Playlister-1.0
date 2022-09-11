import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works with editing song.
 * It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author leipan
 */

 export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModal,id){
        super();
        this.modal=initModal;
        this.id=id;
    }

    doTransaction(){
        this.modal.addSong();
        console.log("did transaction");
    }

    undoTransaction() {
        this.modal.deleteSong(this.id);
        console.log("undid transaction");
    }
 }
