import './AnimatedBox.scss'


export default function AnimatedBox({productImage,owner,title,children}) {
    return  <div className="magic-card text-center">
                                    <img src={productImage} alt={owner} className="magic-card__image"/>
                                    <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">{title}</h4>
                                            <p>{ children}</p>
                                 </div>
                        </div>
}