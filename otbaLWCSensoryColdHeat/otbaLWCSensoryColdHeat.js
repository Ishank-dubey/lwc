import OmniscriptSelect from 'omnistudio/omniscriptSelect';
import HC_OTBA_FULL_BODY from '@salesforce/resourceUrl/HC_OTBA_FULL_BODY';
import tmpl from './otbaLWCSensoryColdHeat.html';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class OtbaLWCSensoryColdHeat extends OmniscriptBaseMixin(OmniscriptSelect) {
    circles = [                
        { cx: 768, cy: 330, r: 40, 'data-value': 'Perineum' },
        { cx: 249, cy: 37, r: 7, 'data-value': 'Head-Anterior-Right' },
        { cx: 267, cy: 37, r: 7, 'data-value': 'Head-Anterior-Left' },
        { cx: 91, cy: 39, r: 7, 'data-value': 'Head-Posterior-Right' },
        { cx: 73, cy: 39, r: 7, 'data-value': 'Head-Posterior-Left' },
        { cx: 586, cy: 37, r: 13, 'data-value': 'Head-Lateral-Right' },
        { cx: 458, cy: 37, r: 13, 'data-value': 'Head-Lateral-Left' },
        { cx: 251, cy: 63, r: 5, 'data-value': 'Neck-Anterior-Right' },
        { cx: 263, cy: 63, r: 5, 'data-value': 'Neck-Anterior-Left' },
        { cx: 87, cy: 65, r: 5, 'data-value': 'Neck-Posterior-Right' },
        { cx: 76, cy: 65, r: 5, 'data-value': 'Neck-Posterior-Left' },
        { cx: 578, cy: 67, r: 10, 'data-value': 'Neck-Lateral-Right' },
        { cx: 460, cy: 67, r: 10, 'data-value': 'Neck-Lateral-Left' },
        { cx: 220, cy: 96, r: 10, 'data-value': 'Shoulder-Anterior-Right' },
        { cx: 295, cy: 96, r: 10, 'data-value': 'Shoulder-Anterior-Left' },
        { cx: 119, cy: 93, r: 10, 'data-value': 'Shoulder-Posterior-Right' },
        { cx: 43, cy: 93, r: 10, 'data-value': 'Shoulder-Posterior-Left' },
        { cx: 578, cy: 92, r: 13, 'data-value': 'Shoulder-Lateral-Right' },
        { cx: 457, cy: 94, r: 13, 'data-value': 'Shoulder-Lateral-Left' },
        { cx: 221, cy: 119, r: 7, 'data-value': 'Upper Arm-Anterior-Right' },
        { cx: 296, cy: 119, r: 7, 'data-value': 'Upper Arm-Anterior-Left' },
        { cx: 117, cy: 123, r: 10, 'data-value': 'Upper Arm-Posterior-Right' },
        { cx: 44, cy: 123, r: 10, 'data-value': 'Upper Arm-Posterior-Left' },
        { cx: 598, cy: 117, r: 11, 'data-value': 'Upper Arm-Lateral-Right' },
        { cx: 444, cy: 117, r: 11, 'data-value': 'Upper Arm-Lateral-Left' },
        { cx: 223, cy: 140, r: 7, 'data-value': 'Elbow-Anterior-Right' },
        { cx: 294, cy: 140, r: 7, 'data-value': 'Elbow-Anterior-Left' },
        { cx: 118, cy: 140, r: 8, 'data-value': 'Elbow-Posterior-Right' },
        { cx: 44, cy: 140, r: 8, 'data-value': 'Elbow-Posterior-Left' },
        { cx: 615, cy: 135, r: 11, 'data-value': 'Elbow-Lateral-Right' },
        { cx: 422, cy: 135, r: 11, 'data-value': 'Elbow-Lateral-Left' },
        { cx: 218, cy: 160, r: 10, 'data-value': 'Forearm-Anterior-Right' },
        { cx: 299, cy: 160, r: 10, 'data-value': 'Forearm-Anterior-Left' },
        { cx: 122, cy: 159, r: 10, 'data-value': 'Forearm-Posterior-Right' },
        { cx: 41, cy: 159, r: 10, 'data-value': 'Forearm-Posterior-Left' },
        { cx: 644, cy: 146, r: 12, 'data-value': 'Forearm-Lateral-Right' },
        { cx: 396, cy: 146, r: 12, 'data-value': 'Forearm-Lateral-Left' },
        { cx: 210, cy: 188, r: 7, 'data-value': 'Wrist-Anterior-Right' },
        { cx: 307, cy: 188, r: 7, 'data-value': 'Wrist-Anterior-Left' },
        { cx: 130, cy: 187, r: 7, 'data-value': 'Wrist-Posterior-Right' },
        { cx: 33, cy: 187, r: 7, 'data-value': 'Wrist-Posterior-Left' },
        { cx: 671, cy: 157, r: 7, 'data-value': 'Wrist-Lateral-Right' },
        { cx: 370, cy: 157, r: 7, 'data-value': 'Wrist-Lateral-Left' },
        { cx: 204, cy: 195, r: 10, 'data-value': 'Hand-Anterior-Right' },
        { cx: 311, cy: 195, r: 10, 'data-value': 'Hand-Anterior-Left' },
        { cx: 135, cy: 199, r: 10, 'data-value': 'Hand-Posterior-Right' },
        { cx: 26, cy: 199, r: 10, 'data-value': 'Hand-Posterior-Left' },
        { cx: 683, cy: 166, r: 13, 'data-value': 'Hand-Lateral-Right' },
        { cx: 356, cy: 166, r: 13, 'data-value': 'Hand-Lateral-Left' },
        { cx: 240, cy: 112, r: 13, 'data-value': 'Chest-Anterior-Right' },
        { cx: 273, cy: 112, r: 13, 'data-value': 'Chest-Anterior-Left' },
        { cx: 242, cy: 162, r: 13, 'data-value': 'Abdomen-Anterior-Right' },
        { cx: 275, cy: 162, r: 13, 'data-value': 'Abdomen-Anterior-Left' },
        { cx: 96, cy: 123, r: 13, 'data-value': 'Upper Back-Posterior-Right' },
        { cx: 65, cy: 123, r: 13, 'data-value': 'Upper Back-Posterior-Left' },
        { cx: 95, cy: 164, r: 13, 'data-value': 'Lower Back-Posterior-Right' },
        { cx: 69, cy: 164, r: 13, 'data-value': 'Lower Back-Posterior-Left' },
        { cx: 585, cy: 139, r: 13, 'data-value': 'Flank-Lateral-Right' },
        { cx: 452, cy: 139, r: 13, 'data-value': 'Flank-Lateral-Left' },
        { cx: 584, cy: 179, r: 15, 'data-value': 'Hip-Lateral-Right' },
        { cx: 455, cy: 184, r: 15, 'data-value': 'Hip-Lateral-Left' },
        { cx: 98, cy: 193, r: 10, 'data-value': 'Buttock-Posterior-Right' },
        { cx: 64, cy: 193, r: 10, 'data-value': 'Buttock-Posterior-Left' },
        { cx: 82, cy: 189, r: 7, 'data-value': 'Sacral Coccyx-Posterior' },
        { cx: 241, cy: 188, r: 13, 'data-value': 'Pelvis-Anterior-Right' },
        { cx: 275, cy: 188, r: 13, 'data-value': 'Pelvis-Anterior-Left' },
        { cx: 243, cy: 225, r: 13, 'data-value': 'Upper Thigh-Anterior-Right' },
        { cx: 274, cy: 225, r: 13, 'data-value': 'Upper Thigh-Anterior-Left' },
        { cx: 97, cy: 228, r: 13, 'data-value': 'Upper Thigh-Posterior-Right' },
        { cx: 66, cy: 228, r: 13, 'data-value': 'Upper Thigh-Posterior-Left' },
        { cx: 584, cy: 224, r: 13, 'data-value': 'Upper Thigh-Lateral-Right' },
        { cx: 454, cy: 224, r: 13, 'data-value': 'Upper Thigh-Lateral-Left' },
        { cx: 244, cy: 269, r: 10, 'data-value': 'Knee-Anterior-Right' },
        { cx: 272, cy: 269, r: 10, 'data-value': 'Knee-Anterior-Left' },
        { cx: 96, cy: 276, r: 10, 'data-value': 'Knee-Posterior-Right' },
        { cx: 63, cy: 276, r: 10, 'data-value': 'Knee-Posterior-Left' },
        { cx: 579, cy: 263, r: 13, 'data-value': 'Knee-Lateral-Right' },
        { cx: 459, cy: 263, r: 13, 'data-value': 'Knee-Lateral-Left' },
        { cx: 242, cy: 303, r: 10, 'data-value': 'Lower Leg-Anterior-Right' },
        { cx: 274, cy: 303, r: 10, 'data-value': 'Lower Leg-Anterior-Left' },
        { cx: 95, cy: 301, r: 10, 'data-value': 'Lower Leg-Posterior-Right' },
        { cx: 66, cy: 301, r: 10, 'data-value': 'Lower Leg-Posterior-Left' },
        { cx: 570, cy: 299, r: 13, 'data-value': 'Lower Leg-Lateral-Right' },
        { cx: 467, cy: 299, r: 13, 'data-value': 'Lower Leg-Lateral-Left' },
        { cx: 248, cy: 339, r: 5, 'data-value': 'Ankle-Anterior-Right' },
        { cx: 268, cy: 339, r: 5, 'data-value': 'Ankle-Anterior-Left' },
        { cx: 91, cy: 342, r: 5, 'data-value': 'Ankle-Posterior-Right' },
        { cx: 71, cy: 343, r: 5, 'data-value': 'Ankle-Posterior-Left' },
        { cx: 571, cy: 334, r: 10, 'data-value': 'Ankle-Lateral-Right' },
        { cx: 465, cy: 334, r: 10, 'data-value': 'Ankle-Lateral-Left' },
        { cx: 248, cy: 352, r: 5, 'data-value': 'Foot-Anterior-Right' },
        { cx: 269, cy: 352, r: 5, 'data-value': 'Foot-Anterior-Left' },
        { cx: 91, cy: 352, r: 5, 'data-value': 'Foot-Posterior-Right' },
        { cx: 71, cy: 352, r: 5, 'data-value': 'Foot-Posterior-Left' },
        { cx: 589, cy: 351, r: 10, 'data-value': 'Foot-Lateral-Right' },
        { cx: 452, cy: 351, r: 10, 'data-value': 'Foot-Lateral-Left' }        
    ];

    bodyImage = HC_OTBA_FULL_BODY;
    imageLoaded = true;
    imageWidth = 0;
    imageHeight = 0;
    img = new Image();
    lineWidth = 1;
    selectedLineWidth = 3;
    strokeColor = 'black'; 
    selectedStrokeColor  = 'red';
    blueStrokeColor  = 'blue';
    bodyPartSelections = [];
    temporaryRedCircle = null;
    isSelectingCircle = false;
     
    render() {
        if (!this.initialized) { 
            this.img.src = this.bodyImage;        
            this.img.onload = () => {              
                this.imageWidth = this.img.width;
                this.imageHeight = this.img.height;
                this.imageLoaded = true;                
                this.fetchJsonfromOmni(); 
                this.drawCircles(false);
                this.initialized = true;              
            };  
        }                  
        return tmpl;
    }

    selectedPart(dataValue) {
        const selectedOption = dataValue;
        if (this.fetchJsonBeforeSelectBodyPart(selectedOption)) {
            return;
        }
        
        if (this.temporaryRedCircle) {
            this.temporaryRedCircle.selected = false;
        }

        const circleToSelect = this.circles.find(circle => circle['data-value'] == selectedOption);
        if (circleToSelect) {
            circleToSelect.selected = true;
            this.temporaryRedCircle = circleToSelect;
        }

        let selectedValues = selectedOption;
        
        this.applyCallResp(selectedValues);         
        this.isSelectingCircle = true;
        this.fetchJsonfromOmni();       
        this.drawCircles(false);
    }

    clickMeRefresh() {
        const selectElementValue = this.elementValue
        if (this.temporaryRedCircle) {
            this.temporaryRedCircle.selected = false;
        }

        const circleToSelect = this.circles.find(circle => circle['data-value'] == selectElementValue);
        if (circleToSelect) {
            circleToSelect.selected = true;
            this.temporaryRedCircle = circleToSelect;
        }
        this.fetchJsonfromOmni();
        this.drawCircles(false);    
      }   
    
    fetchJsonBeforeSelectBodyPart(selectedOption) {                
        if (this.jsonData && this.jsonData.PhysicalAssessment && this.jsonData.PhysicalAssessment.HC_CHA_OTBA_SensoryObservationColdHeatsensation) {
            const BodyPartAssessmentData = this.jsonData.PhysicalAssessment.HC_CHA_OTBA_SensoryObservationColdHeatsensation;

            const assessmentDataArray = Array.isArray(BodyPartAssessmentData) ? BodyPartAssessmentData : [BodyPartAssessmentData];

            const isExist = assessmentDataArray.some(selection =>
                selection.HC_CHA_OTBA_LocationofColdHeatsensation === selectedOption
            );
    
            if (isExist) {
                return true;
            }
        }
        return false;
    }   

    fetchJsonfromOmni() {
        if (this.jsonData && this.jsonData.PhysicalAssessment && this.jsonData.PhysicalAssessment.HC_CHA_OTBA_SensoryObservationColdHeatsensation) {
            let BodyPartAssessmentData = this.jsonData.PhysicalAssessment.HC_CHA_OTBA_SensoryObservationColdHeatsensation;

            if (!Array.isArray(BodyPartAssessmentData)) {
                BodyPartAssessmentData = [BodyPartAssessmentData];
            }

            this.bodyPartSelections = BodyPartAssessmentData
                .filter(item => item.HC_CHA_OTBA_LocationofColdHeatsensation)
                .map(item => ({
                    HC_CHA_OTBA_LocationofColdHeatsensation: item.HC_CHA_OTBA_LocationofColdHeatsensation
                }));
        }         
    }    
    
    drawCircles(isTooltip) {
          const canvas = this.template.querySelector('.circleCanvas');
        if (!canvas) {
            return;
        }
    
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        if (this.img) {
            context.drawImage(this.img, 0, 0, this.imageWidth, this.imageHeight);
        }
        
        this.circles.forEach(circle => {
            context.beginPath();
            context.arc(circle.cx, circle.cy, circle.r, 0, 2 * Math.PI);
            context.lineWidth = circle.selected ? this.selectedLineWidth : this.lineWidth;            
           
            const isExist = this.bodyPartSelections.some(selection =>
                selection.HC_CHA_OTBA_LocationofColdHeatsensation === circle['data-value']
            );

            context.strokeStyle = this.strokeColor;
            context.lineWidth = this.lineWidth;    
           
            if (isExist && !circle.selected) {                
                context.strokeStyle = this.blueStrokeColor;
                context.lineWidth = this.selectedLineWidth;                                
            } else if (circle.selected) {
                context.strokeStyle = this.selectedStrokeColor;
                context.lineWidth = this.selectedLineWidth;                
            } 
            else {
                context.strokeStyle = this.strokeColor;
                context.lineWidth = this.lineWidth;                
            }          
            context.stroke();
            context.closePath();
        });
    }
   
    handleCanvasClick(event){
        const canvas = this.template.querySelector('.circleCanvas');
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        this.circles.forEach(circle => {
            const distance = Math.sqrt((mouseX - circle.cx) ** 2 + (mouseY - circle.cy) ** 2);
            if (distance <= circle.r) {                                
                this.selectedPart(circle['data-value'])
            }
        });
    }   

    renderedCallback() {          
        if (!this.isSelectingCircle) {
            this.fetchJsonfromOmni();
            this.drawCircles(true);
        } else {
            this.isSelectingCircle = false; 
        }
    }  
}