import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { APIContext } from 'context';
import Header from 'components/Header';
import { Main } from './styled';
import { ReactComponent as BottleSVG } from 'assets/bottle-alt.svg';
import { ReactComponent as ScrollSVG } from 'assets/scroll.svg';
import { ReactComponent as LighthouseSVG } from 'assets/lighthouse.svg';

const ReadPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { state, readMessage } = useContext(APIContext);

  const onClickHandler = () => readMessage(id);

  if (state.getError || state.getResponse === '404 Error')
    return (
      <>
        <Header SVG={LighthouseSVG} />
        <Main>
          <strong>message not found</strong>
          <br />
          even from up here we can't see any bottles in the water. sorry.
          <br />
          <button onClick={() => history.push('/')}>Write one</button>
        </Main>
      </>
    );

  if (state.getResponse) {
    return (
      <>
        <Header SVG={ScrollSVG} />
        <Main>
          {state.getResponse.split('\n').map((line, key) => {
            return (
              <React.Fragment key={key}>
                {line}
                <br />
              </React.Fragment>
            );
          })}
          <br />
          <button onClick={() => history.push('/')}>Destroy now</button>
        </Main>
      </>
    );
  }

  return (
    <>
      <Header SVG={BottleSVG} />
      <Main>
        <strong>someone sent you a message</strong>
        <br />
        pay attention: it will be destroyed right after you read it.
        <br />
        <button onClick={onClickHandler}>Read now</button>
      </Main>
    </>
  );
};

export default ReadPage;
