export function blur(evt, tag = 'BUTTON'){
    if( evt && evt.path ){
        const ancestorButton = evt.path.find(el => el.tagName == tag)
        if( ancestorButton ){
            ancestorButton.blur()
        }
    }
}
export function autoBlur(tag = 'BUTTON'){
    window.addEventListener('click', evt => {
        if( evt.path && evt.path.find && evt.path.find(el => el.tagName == tag)){
            blur(evt, tag)
        }
    })
}
