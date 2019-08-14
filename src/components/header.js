import React, { useEffect, Fragment, useState } from 'react';
import { MdTouchApp } from 'react-icons/md';

const Header = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const showScrollToTopButton = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) setShowScrollTopButton(true);
    else setShowScrollTopButton(false);
  }
  const headlineRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }

  useEffect(() => {
    window.addEventListener('scroll', e => {
      showScrollToTopButton();
      setHeadlineHeight(headlineRef.current.clientHeight - navHeight);
    });
    window.scrollTo(0, 0);
  }, []);

  return <Fragment>
    <header>
      <div ref={headlineRef} className="headline" style={{ opacity: `${1 - scrollTop / headlineHeight}` }}>
        <div className="inner" >
          <div style={{ transform: "translateY(" + scrollTop * 0.4 + "px)", width: '75vw' }}>
            <div className='summaryContainer'>
              <div>
                <FaSuitcase size='60px' color='black' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numTotalTestSuites} delay={1} duration={3} /></div>
                <div>Test Suites</div>
              </div>
              <div>
                <FaCopy size='60px' color='#0b2c32' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numTotalTests} delay={1} duration={3} /></div>
                <div>Tests</div>
              </div>
              <div>
                <MdDoneAll size='60px' color='lawngreen' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numPassedTests} delay={1} duration={3} /></div>
                <div>Passed</div>
              </div>
              <div>
                <MdClear size='60px' color='red' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numFailedTests} delay={1} duration={3} /></div>
                <div>Failed</div>
              </div>
              <div>
                <MdRedo size='60px' color='#ffce42' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numPendingTests} delay={1} duration={3} /></div>
                <div>Skipped</div>
              </div>
              <div>
                <MdCamera size='60px' color='skyblue' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={totalSnapshots} delay={1} duration={3} /></div>
                <div>Snapshots</div>
              </div>
              <div>
                <MdAlarmOn size='60px' color='whitesmoke' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={totalTimeInSecs} delay={1} duration={3} /></div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {showScrollTopButton && <button onClick={scrollToTop} className='toTopButton' id="myBtn" title="Go to top">
      Top <MdTouchApp size={20} />
    </button>}
  </Fragment>
}

export default Header