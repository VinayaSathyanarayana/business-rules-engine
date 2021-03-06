/////<reference path='../customValidators/BasicValidators.ts'/>
/////<reference path='../validation/Validation.ts'/>
//
/////<reference path='util.ts'/>
/////<reference path='metaDataRules.ts'/>
//
//
//module Validation {
//
//    export interface IForm {
//        Errors:IValidationResult;
//        //Validators:Validators;
//
//        Validate():void;
//    }
//
//    /**
//     * YUIDoc_comment
//     *
//     * @class form
//     * @constructor
//     **/
//    export class MetaForm implements IForm{
//
//        public CLASS_NAME:string = 'form';
//
//        public Errors:IValidationResult = new CompositeValidationResult("Main form");
//        //public Validators:Validators = new Validators();
//
//        public MetaRules:MetaDataRules;
//
//
//        constructor(public MetaData:any) {
//            this.Data = {};
//            Util.generateDataEx(this.MetaData,this.Data);
//
//            this.MetaRules = new MetaDataRules(this.Data,this.MetaData);
//
//            _.each(this.MetaRules.Rules, function(rule:MetaDataRule) {
//                this.Errors.Add(rule.Error);
//            },this);
//        }
//
//        public Data:any;
//
//        public Validate():void
//        {
//            this.MetaRules.ValidateAll();
//            //this.Validators.ValidateAll();
//        }
//    }
//}
////var _ = require('underscore');
////var Q = require('q');
////exports.Validation = Validation