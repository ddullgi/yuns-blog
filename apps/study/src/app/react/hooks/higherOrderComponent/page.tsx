import type { ComponentType } from "react";

interface LoginProps {
	loginRequired?: boolean;
}

function withLoginComponent<T>(Component: ComponentType<T>) {
	return function returnF(props: T & LoginProps) {
		const { loginRequired, ...restProps } = props;

		if (loginRequired) {
			return <>로그인이 필요합니다.</>;
		}

		return <Component {...(restProps as T)} />;
	};
}

// 원래 구현하고자 하는 컴포넌트를 만들고,  withLoginComponent로 감싸기만 하면 끝이다.
// 로그인 여부, 로그인이 안 되면 다른 컴포넌트를 렌더링하는 책임은 모두
// 고차 컴포넌트인 withLoginComponent에 맡딜 수 있어 매우 편리하다.
const Component = withLoginComponent((props: { value: string }) => {
	return <h3>{props.value}</h3>;
});

export default function Page() {
	// 로그인 정보를 가져온다.
	const isLogin = true;
	return <Component value="text" loginRequired={isLogin} />;
	// return <Component value="text" />
}
