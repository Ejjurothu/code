import { IsNotBlank } from "@uo/validation-decorators";
import { Exclude, Expose } from "class-transformer";
import { IsArray, IsBoolean, IsDefined, IsString } from "class-validator";
import { QueueRequestModel } from "../queue";

@Exclude()
export class WaitTimeAttractionUpdateRequest {
    /**
     * Identifies the resort area where the wait time attraction is located.
     * example UOR
     */
    @Expose()
    @IsString()
    @IsDefined()
    @IsNotBlank()
    public resort_area_code: string;

    /**
     * Identifies the park where the wait time attraction is located.
     * example USF
     */
    @Expose()
    @IsString()
    @IsDefined()
    @IsNotBlank()
    public park_code: string;

    /**
     * Identifies the land where the wait time attraction is located.
     * example productioncentral
     */
	@Expose()
    @IsString()
    @IsDefined()
    @IsNotBlank()
    public land_code: string;

    /**
     * Whether or not automated wait times are available at the attraction
     * example true
     */
	@Expose()
    @IsBoolean()
    @IsDefined()
    public automated_wait_time_capable: boolean;

    /**
     * Whether or not team members are permitted to set a manual wait time from an attraction wait time board
     * example true
     */
	@Expose()
    @IsBoolean()
    @IsDefined()
    public allow_manual_wait_time_from_wait_time_board: boolean;

    /**
     * The name of the attraction
     * example TRANSFORMERS™: The Ride-3D
     */
	@Expose()
    @IsString()
    @IsDefined()
    @IsNotBlank()
    public name: string;

    /**
     * A collection of wait time attraction categories
     * example 'hhn', 'attraction', etc.
     */
    @Expose()
    @IsArray()
    @IsDefined()
    public categories: string[];

    /**
     * Whether the wait time attraction should be visible on mobile apps
     * example true
     */
	@Expose()
    @IsBoolean()
    @IsDefined()
    public show_externally: boolean;

	/**
     * Queues at the wait time attraction
     */
    @Expose()
    @IsArray()
    @IsDefined()
    public queues: QueueRequestModel[];
}
