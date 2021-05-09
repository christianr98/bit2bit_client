import React from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const StyledRichText = styled.div`
    margin-bottom: 1rem;
`

const RichText = ({value, handleChange, disabled}) => {

    const onChange= ( event, editor ) => {
        const data = editor.getData();
        handleChange(data)
        //console.log( { event, editor, data } );
    } 
    return (
        <StyledRichText>
            <CKEditor
                editor={ClassicEditor}
                //config={ disabled ? {removePlugins: 'toolbars'} : CKEditor.config}
                data={value}
                //onReady={handleReady}
                onChange={onChange}
                //onBlur={() => onFocus(false)}
                //onFocus={() => onFocus(true)}
                disabled={disabled}
            />
            
        </StyledRichText>
    )
}

export default RichText
