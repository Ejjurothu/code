import { Exclude, Expose } from "class-transformer";
import { QueueRedisModel } from "../queue";

@Exclude()
export class WaitTimeAttractionRedisModel {
    /**
     * The unique identifier for the wait time attraction.
     * example uor-transformers-the-ride-3d
     */
    @Expose()
    public id: string;

    /**
     * Identifies the resort area where the wait time attraction is located.
     * example UOR
     */
    @Expose()
    public resort_area_code?: string;

    /**
     * Identifies the park where the wait time attraction is located.
     * example USF
     */
    @Expose()
    public park_code?: string;

    /**
     * Identifies the land where the wait time attraction is located.
     * example productioncentral
     */
    @Expose()
    public land_code?: string;

    /**
     * Whether or not automated wait times are available at the attraction
     * example true
     */
    @Expose()
    public automated_wait_time_capable?: boolean;

    /**
     * Whether or not team members are permitted to set a manual wait time from an attraction wait time board
     * example true
     */
    @Expose()
    public allow_manual_wait_time_from_wait_time_board?: boolean;

    /**
     * The name of the attraction
     * example TRANSFORMERS™: The Ride-3D
     */
    @Expose()
    public name?: string;

    /**
     * A collection of wait time attraction categories
     * example 'hhn', 'attraction', etc.
     */
    @Expose()
    public categories?: string[];

    /**
     * Whether the wait time attraction should be visible on mobile apps
     * example true
     */
    @Expose()
    public show_externally?: boolean;

    /**
     * Queues at the wait time attraction
     */
    @Expose()
    public queues?: QueueRedisModel[];
}
