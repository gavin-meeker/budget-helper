/**
 * Represents a YNAB budget category, including its details,
 * goals, and financial status.
 */
export interface Category {
    /** The id of the category */
    id: string
    /** The id of the category group */
    category_group_id: string
    /** The name of the category group */
    category_group_name: string
    /** The name of the category */
    name: string
    /** Whether the category is hidden */
    hidden: boolean
    /** * @deprecated No longer used. Value will always be null.
     */
    original_category_group_id?: string | null
    /** A note for the category */
    note?: string | null
    /** Budgeted amount in milliunits format */
    budgeted: number
    /** Activity amount in milliunits format */
    activity: number
    /** Balance in milliunits format */
    balance: number
    /** The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending', DEBT='Debt') */
    goal_type?: 'TB' | 'TBD' | 'MF' | 'NEED' | 'DEBT' | null
    /** Indicates the monthly rollover behavior for "NEED"-type goals. When "true", the goal will always ask for the target amount in the new month. When "false", previous month category funding is used. For other goal types, this field will be null. */
    goal_needs_whole_amount?: boolean | null
    /** A day offset modifier for the goal's due date. When goal_cadence is 2 (Weekly), this value specifies which day of the week the goal is due (0 = Sunday, 6 = Saturday). Otherwise, this value specifies which day of the month the goal is due (1 = 1st, 31 = 31st, null = Last day of Month). */
    goal_day?: number | null
    /** The goal cadence. Value in range 0-14. */
    goal_cadence?: number | null
    /** The goal cadence frequency. */
    goal_cadence_frequency?: number | null
    /** The month a goal was created, in YYYY-MM-DD format. */
    goal_creation_month?: string | null
    /** The goal target amount in milliunits. */
    goal_target?: number | null
    /** The original target month for the goal to be completed, in YYYY-MM-DD format. */
    goal_target_month?: string | null
    /** The percentage completion of the goal. */
    goal_percentage_complete?: number | null
    /** The number of months, including the current month, left in the current goal period. */
    goal_months_to_budget?: number | null
    /** The amount of funding still needed in the current month to stay on track towards completing the goal. */
    goal_under_funded?: number | null
    /** The total amount funded towards the goal within the current goal period. */
    goal_overall_funded?: number | null
    /** The amount of funding still needed to complete the goal within the current goal period. */
    goal_overall_left?: number | null
    /** Whether the category has been deleted. Deleted categories will only be included in delta requests. */
    deleted: boolean
}
