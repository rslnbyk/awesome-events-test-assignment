import * as ReactDOM from 'react-dom';
import {
  AccountData,
  Avatar,
  ButtonsContainer,
  CancelButton,
  DateP,
  DescriptionP,
  DesktopDiv,
  H2,
  H3,
  H4,
  InfoDiv,
  Input,
  InputsItem,
  InputsList,
  Label,
  ModalDiv,
  ModalOverlay,
  Name,
  StatusP,
  SubmitButton,
  TabletContainer,
  TabletDiv,
} from './UserModal.styled';
import { useDispatch } from 'react-redux';
import { changeUser } from 'redux/usersOperations';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const UserModal = ({ onClose, data }) => {
  const { t } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1280;

  const newRef = useRef(null);
  const handleOutsideClick = e => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      changeUser({
        id: data.id,
        firstName: e.target.elements.firstName.value,
        lastName: e.target.elements.lastName.value,
        gender: e.target.elements.gender.value,
        birthDay: e.target.elements.birthDay.value,
        phone: e.target.elements.phone.value,
        email: e.target.elements.email.value,
      })
    );
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalDiv ref={newRef}>
        <H2>{t('Change personal data')}</H2>
        {width < breakpoint ? (
          <>
            <TabletDiv>
              <TabletContainer>
                <Avatar src={data.avatar} alt="User avatar" />
                <Name>{`${data.firstName} ${data.lastName}`}</Name>
                <StatusP>{t('Active')}</StatusP>
                <DateP>{`${t('Last sign in')}: ${data.lastLogin.slice(
                  0,
                  10
                )}`}</DateP>
                <DateP>{`${t('Created')}: ${data.createdAt.slice(
                  0,
                  10
                )}`}</DateP>
              </TabletContainer>
              <div>
                <H3>{t('Account Data')}</H3>
                <H4>{t('Personal information')}</H4>
                <DescriptionP>{data.description}</DescriptionP>
              </div>
            </TabletDiv>
            <form onSubmit={handleSubmit}>
              <InputsList>
                <InputsItem>
                  <Label>
                    {t('First Name')}
                    <br />
                    <Input
                      type="text"
                      name="firstName"
                      defaultValue={data.firstName}
                    />
                  </Label>
                </InputsItem>
                <InputsItem>
                  <Label>
                    {t('Last Name')}
                    <br />
                    <Input
                      type="text"
                      name="lastName"
                      defaultValue={data.lastName}
                    />
                  </Label>
                </InputsItem>
                <InputsItem>
                  <Label>
                    {t('Gender')}
                    <br />
                    <Input
                      type="text"
                      name="gender"
                      defaultValue={data.gender}
                    />
                  </Label>
                </InputsItem>
                <InputsItem>
                  <Label>
                    {t('Birthday')}
                    <br />
                    <Input
                      type="text"
                      name="birthDay"
                      defaultValue={data.birthDay.slice(0, 10)}
                    />
                  </Label>
                </InputsItem>
                <InputsItem>
                  <Label>
                    {t('Phone')}
                    <br />
                    <Input type="text" name="phone" defaultValue={data.phone} />
                  </Label>
                </InputsItem>
                <InputsItem>
                  <Label>
                    {t('Email')}
                    <br />
                    <Input
                      type="email"
                      name="email"
                      defaultValue={data.email}
                    />
                  </Label>
                </InputsItem>
              </InputsList>
              <ButtonsContainer>
                <SubmitButton type="submit">{t('Save')}</SubmitButton>
                <CancelButton
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    onClose();
                  }}
                >
                  {t('Cancel')}
                </CancelButton>
              </ButtonsContainer>
            </form>
          </>
        ) : (
          <DesktopDiv>
            <TabletContainer>
              <Avatar src={data.avatar} alt="User avatar" />
              <Name>{`${data.firstName} ${data.lastName}`}</Name>
              <StatusP>{t('Active')}</StatusP>
              <DateP>{`${t('Last sign in')}: ${data.lastLogin.slice(
                0,
                10
              )}`}</DateP>
              <DateP>{`${t('Created')}: ${data.createdAt.slice(0, 10)}`}</DateP>
            </TabletContainer>
            <div>
              <H3>{t('Account Data')}</H3>
              <AccountData>
                <InfoDiv>
                  <H4>{t('Personal information')}</H4>
                  <DescriptionP>{data.description}</DescriptionP>
                </InfoDiv>
                <form onSubmit={handleSubmit}>
                  <InputsList>
                    <InputsItem>
                      <Label>
                        {t('First Name')}
                        <br />
                        <Input
                          type="text"
                          name="firstName"
                          defaultValue={data.firstName}
                        />
                      </Label>
                    </InputsItem>
                    <InputsItem>
                      <Label>
                        {t('Last Name')}
                        <br />
                        <Input
                          type="text"
                          name="lastName"
                          defaultValue={data.lastName}
                        />
                      </Label>
                    </InputsItem>
                    <InputsItem>
                      <Label>
                        {t('Gender')}
                        <br />
                        <Input
                          type="text"
                          name="gender"
                          defaultValue={data.gender}
                        />
                      </Label>
                    </InputsItem>
                    <InputsItem>
                      <Label>
                        {t('Birthday')}
                        <br />
                        <Input
                          type="text"
                          name="birthDay"
                          defaultValue={data.birthDay.slice(0, 10)}
                        />
                      </Label>
                    </InputsItem>
                    <InputsItem>
                      <Label>
                        {t('Phone')}
                        <br />
                        <Input
                          type="text"
                          name="phone"
                          defaultValue={data.phone}
                        />
                      </Label>
                    </InputsItem>
                    <InputsItem>
                      <Label>
                        {t('Email')}
                        <br />
                        <Input
                          type="email"
                          name="email"
                          defaultValue={data.email}
                        />
                      </Label>
                    </InputsItem>
                  </InputsList>
                  <ButtonsContainer>
                    <SubmitButton type="submit">{t('Save')}</SubmitButton>
                    <CancelButton
                      type="button"
                      onClick={e => {
                        e.stopPropagation();
                        onClose();
                      }}
                    >
                      {t('Cancel')}
                    </CancelButton>
                  </ButtonsContainer>
                </form>
              </AccountData>
            </div>
          </DesktopDiv>
        )}
      </ModalDiv>
    </ModalOverlay>,
    document.getElementById('modal')
  );
};
