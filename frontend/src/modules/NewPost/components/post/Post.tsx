import { useState } from "react"
import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import { 
    DescriptionBlock, 
    DescriptionTextArea, 
    MediaBlockWrapper, 
    PostContent, 
    PostMediaContent 
} from "@/modules/NewPost/components/post/style";
import TextArea from "@/common/components/ui/TextArea";
import Loader from "@/modules/NewPost/components/Loader";
import RenderMedia from "@/modules/NewPost/components/post/RenderMedia";

const Post = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleChangeFiles = (file: File) => {
        setFiles(currentFiles => currentFiles.length < 10 ? [...currentFiles, file] : currentFiles);
    }

    const deleteMedia = (id: number | string) => {
        const tmp = files;
        tmp.splice(Number(id), 1);
        setFiles([...tmp]);
    }

    return (
        <>
            <PostContent>
                <DescriptionBlock>
                    Фото/Видео
                </DescriptionBlock>

                <PostMediaContent>
                    <RenderMedia MediaFiles={files} deleteMedia={deleteMedia}></RenderMedia>

                    {files.length < 10 &&  <DragAndDropUpload onFile={handleChangeFiles} multiple={true} accept="image/*, video/*">
                        <MediaBlockWrapper>
                            <Loader sizeIcon={50} />
                        </MediaBlockWrapper>
                    </DragAndDropUpload>}
                </PostMediaContent>
            </PostContent>

            <PostContent>
                <DescriptionBlock>
                    Описание
                </DescriptionBlock>
                <DescriptionTextArea>
                    <TextArea
                        textAreaPlaceholder='Добавить описание...'
                        wrapperStyle={{ width: '100%', height: '100%' }}
                    />
                </DescriptionTextArea>
            </PostContent>
        </>
    )
}

export default Post