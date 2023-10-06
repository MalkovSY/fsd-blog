import { Component, ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import './ErrorBoundary.scss';

interface ErrorBoundaryProps extends WithTranslation {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: { message: string, stack: string } | null;
}

class ErrorBoundary
  extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error:Error) {
    return this.setState({
      error: {
        message: error.message,
        stack: error.stack || '',
      },
    });
  }

  render() {
    const { error } = this.state;
    const { children, t } = this.props;

    if (error) {
      return (
        <div className="ErrorBoundary">
          <h1>{t('Что-то пошло не так')}</h1>
          <h3>{error.message}</h3>
          <p>{t('Подробности')}</p>
          <p className="errorBoundaryStack">{error.stack}</p>
        </div>
      );
    }

    return children;
  }
}

export default withTranslation()(ErrorBoundary);
