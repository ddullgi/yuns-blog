import dayjs from "dayjs";

/**
 * 날짜를 최신순으로 정렬하는 함수
 * @param { string | Date } date1
 * @param { string | Date } date2
 * @returns { number }
 */
export const sortByDateDescending = (
	date1: string | Date,
	date2: string | Date,
): number => {
	const dateA = dayjs(date1);
	const dateB = dayjs(date2);
	return dateB.diff(dateA);
};

/**
 * 주어진 두 날짜의 순서를 비교하는 함수
 * @param { string | Date } date1
 * @param { string | Date } date2
 * @returns { boolean }
 */
export const isFirstDateBeforeSecond = (
	date1: string | Date,
	date2: string | Date,
): boolean => {
	const firstDate = dayjs(date1);
	const secondDate = dayjs(date2);

	return firstDate.isBefore(secondDate);
};
