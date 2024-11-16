import { Instructor } from "@/shared"
import { InstructorCardGallery } from "./instructor-card-gallery";

interface Props {
    instructor: Instructor;
}

export const InstructorCard: React.FC<Props> = ({instructor}) => {
    return (
        <div className="w-full flex flex-col px-2 py-4 shadow-md rounded-xl">
            <InstructorCardGallery className="w-full mb-4" uniqueValueForSliderClass={instructor.id} instructorGallery={instructor.gallery}/>
            <div className="w-full flex flex-col">
                <p className='mb-2 font-bold'>{instructor.name}</p>
                <ul className='font-medium text-sm'>
                    {
                        instructor.achievements.map(achivement => 
                            <li className='mb-2' key={achivement}>{achivement}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}