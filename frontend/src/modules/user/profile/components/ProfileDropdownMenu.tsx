import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu"
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem"

export const ProfileDropdownMenu = () => {
  return (
    <DropdownMenu>
        <DropdownMenuItem icon="editProfile" title="Редактировать профиль" link="/" />
        <DropdownMenuItem icon="qrcode" title="QR-code Пользователя" link="/" />
        <DropdownMenuItem icon="info" title="Подробная информация" link="/" />
        <DropdownMenuItem icon="saved" title="Сохраненное" link="/" />
        <DropdownMenuItem icon="like" title="Отмеченное" link="/" />
        <DropdownMenuItem icon="settings" title="Настройки" link="/" />
        <DropdownMenuItem icon="help" title="Поддержка" link="/" />
        <DropdownMenuItem icon="quit" title="Выйти" isRed={true} link="/" />
  </DropdownMenu>
  )
}
