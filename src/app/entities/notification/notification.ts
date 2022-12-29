import { randomUUID } from 'crypto';
/* eslint-disable prettier/prettier */
export interface NotificationProps {
    id: string
    authUserId: string
    content: string
    category: string
    createdAt: Date 
    readAt?: Date | null // quando cria -> undefined (nunca foi setado) / null (vazio proposital retornado)
}

export class Notification {
    private props: NotificationProps

    // constructor com os props de criacao inicial
    public constructor(props: NotificationProps) {
        this.validate(props)
        this.props = props
    }

    // validate com as restricoes de criacao
    public validate(props: NotificationProps) {
        if (props.content.length < 10 || props.content.length > 255 ) {
            throw Error("content length error")
        }
        return true
    }

}
