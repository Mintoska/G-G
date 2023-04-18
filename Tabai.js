export default class Modal{
  constructor(props){
      this.props = props;
      return this.render();
  }
  render(){
    this.newModal = document.createElement('div');
    this.newModal.classList.add('modal');

    this.newModalContent = document.createElement('div');
    this.newModalContent.classList.add('modalContent');

    this.newCloseButton = document.createElement('div');
    this.closeModal();
    this.newCloseButton.classList.add('closeModal');
    this.newCloseButtonText = document.createTextNode('x');
    this.newCloseButton.appendChild(this.newCloseButtonText);

    this.newId = document.createElement('h2');
    this.newIdText = document.createTextNode(`${this.props.id}`);
    this.newId.appendChild(this.newIdText);

    this.newAbout = document.createElement('p');
    this.newAboutText = document.createTextNode(`About: ${this.props.about}`);
    this.newAbout.appendChild(this.newAboutText);

    this.newPic = document.createElement('img');
    this.newPic.setAttribute('src', this.props.source);

    this.newVid = document.createElement('video');
    this.newVid.setAttribute('src', this.props.video);

      this.newModalContent.append(this.newId, this.newCloseButton, this.newPic, this.newVid, this.newAbout);

      this.newModal.appendChild(this.newModalContent);

      return this.newModal;
    }
    
    closeModal(){
      this.newCloseButton.addEventListener('click', () => {
          this.newModal.remove();
      });
      this.newModal.addEventListener('click', e => {
          if(e.target === this.newModal){
              this.newModal.remove();
          }
      })
  }
  };