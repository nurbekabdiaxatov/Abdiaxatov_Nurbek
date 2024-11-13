"use client";
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyEditor: React.FC = () => {
    const [editorContent, setEditorContent] = useState<string>('');

    const handleEditorChange = (content: string, editor: any) => {
        setEditorContent(content);
        // Optionally, send content to your API
        fetch('/api/save-content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        })
            .then((response) => response.json())
            .then((data) => console.log('Content saved', data))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <Editor
            apiKey="t10ja0i730zqpt4x66kvsuvfuglflk3gdgtqxmk2e00ez5xz"
            init={{
                plugins: [
                    'anchor',
                    'autolink',
                    'charmap',
                    'codesample',
                    'emoticons',
                    'image',
                    'link',
                    'lists',
                    'media',
                    'searchreplace',
                    'table',
                    'visualblocks',
                    'wordcount',
                    'checklist',
                    'mediaembed',
                    'casechange',
                    'export',
                    'formatpainter',
                    'pageembed',
                    'a11ychecker',
                    'tinymcespellchecker',
                    'permanentpen',
                    'powerpaste',
                    'advtable',
                    'advcode',
                    'editimage',
                    'advtemplate',
                    'ai',
                    'mentions',
                    'tinycomments',
                    'tableofcontents',
                    'footnotes',
                    'mergetags',
                    'autocorrect',
                    'typography',
                    'inlinecss',
                    'markdown',
                    'importword',
                    'exportword',
                    'exportpdf',
                ],
                toolbar:
                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
                ai_request: (request: any, respondWith: any) =>
                    respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                exportpdf_converter_options: {
                    format: 'Letter',
                    margin_top: '1in',
                    margin_right: '1in',
                    margin_bottom: '1in',
                    margin_left: '1in',
                },
                exportword_converter_options: { document: { size: 'Letter' } },
                importword_converter_options: {
                    formatting: { styles: 'inline', resets: 'inline', defaults: 'inline' },
                },
            }}
            initialValue="Welcome to TinyMCE!"
            onEditorChange={handleEditorChange}
        />
    );
};

export default TinyEditor;
