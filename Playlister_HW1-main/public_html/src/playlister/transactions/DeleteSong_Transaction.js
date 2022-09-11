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

 export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initModal,initOldTitle, initOldArtist, initOldYTID,id){
        super();
        this.modal=initModal;
        this.oldTitle=initOldTitle;
        this.oldArtist=initOldArtist;
        this.oldYTID=initOldYTID;
        this.id=id;
    }

    doTransaction(){
        this.modal.deleteSong(this.id);
        console.log("did transaction");
    }

    undoTransaction() {
        this.modal.addSong();
        let index=this.modal.getPlaylistSize()-1;
        this.modal.moveSong(index,this.id);
        this.modal.renameSong(this.oldTitle,this.oldArtist,this.oldYTID,this.id)
        console.log("undid transaction");
    }
 }
