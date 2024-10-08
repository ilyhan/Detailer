// import { User } from "@/common/interfaces/User";

{ 'TODO доделать интерфейс' }

export interface IForwardMessage {
    chatId: number | string;
    mesId: number | string;
};

export interface IMessage {
    id: number | string; //в зависимости как бэк реализуем
    text?: string;
    author: string; //временно
    createdAt: string; //временно
    media?: File; //продумать как файл передаеся, только url его или полностью файл
    answeredMessage?: number | string; //указатель на id сообщения на которое мы ответили
    forwardMessage?: IForwardMessage;
    isEdited?: boolean;
};

export interface IChat {
    id: number | string;
    messages: IMessage[];
    participants: string[];
    pinnedPosition?: number; //если чат закреплен то показывает позицию
    nameGroup?: string; //если участников больше двух, то есть это беседа на трех и более участников
    avatarGroup?: string; //url аватарки беседы
    answeredMessages?: number | string; //указатель на id сообщения на которое мы ответили
    pinnedMessage?: number | string; //закрепленное сообщение чата
    notification?: boolean; //включены выключены уведомления
    speaker?: boolean;//включен или выключен звук
    theme?: string; //продумать как файл передаеся, только url его или полностью файл
    editedMessageId?: number | string;
};