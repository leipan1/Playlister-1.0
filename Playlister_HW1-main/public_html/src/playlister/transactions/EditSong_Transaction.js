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

 export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModal, initOldTitle,initOldArtist,initOldYTID,initNewTitle, initNewArtist, initNewYTID,id){
        super();
        this.modal=initModal;
        this.oldTitle=initOldTitle;
        this.oldArtist=initOldArtist;
        this.oldYTID=initOldYTID;
        this.newTitle=initNewTitle;
        this.newArtist=initNewArtist;
        this.newYTID=initNewYTID;
        this.id=id;
    }

    doTransaction(){
        this.modal.renameSong(this.newTitle,this.newArtist,this.newYTID,this.id);
        console.log("did transaction");
    }

    undoTransaction() {
        this.modal.renameSong(this.oldTitle,this.oldArtist,this.oldYTID,this.id);
        console.log("undid transaction");
    }
 }
