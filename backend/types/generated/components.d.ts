import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_company_contact_details';
  info: {
    description: '';
    displayName: 'Contact Details';
    icon: 'address-book';
  };
  attributes: {
    mail_id: Schema.Attribute.Email;
    mobile_no: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface JobCourseList extends Struct.ComponentSchema {
  collectionName: 'components_job_course_lists';
  info: {
    displayName: 'CourseList';
    icon: 'align-left';
  };
  attributes: {
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
  };
}

export interface JobHr extends Struct.ComponentSchema {
  collectionName: 'components_job_hrs';
  info: {
    displayName: 'hr';
    icon: 'arrow-right';
  };
  attributes: {
    contact_number: Schema.Attribute.BigInteger;
    email: Schema.Attribute.Email;
    name: Schema.Attribute.String;
  };
}

export interface JobPackage extends Struct.ComponentSchema {
  collectionName: 'components_job_packages';
  info: {
    displayName: 'package';
    icon: 'angle-right';
  };
  attributes: {
    allowance: Schema.Attribute.Text;
    basic_salary: Schema.Attribute.String;
    ctc: Schema.Attribute.String;
    perks: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface StudentExtraAddress extends Struct.ComponentSchema {
  collectionName: 'components_composite_address_addresses';
  info: {
    description: '';
    displayName: 'Address';
    icon: 'home';
  };
  attributes: {
    city: Schema.Attribute.String;
  };
}

export interface StudentExtraAppliedJob extends Struct.ComponentSchema {
  collectionName: 'components_applied_job_status_applied_jobs';
  info: {
    description: '';
    displayName: 'Applied Job';
    icon: 'address-card';
  };
  attributes: {
    job: Schema.Attribute.Relation<'oneToOne', 'api::job.job'>;
    status: Schema.Attribute.Enumeration<
      ['Applied', 'Shortlisted', 'Rejected', 'Selected']
    >;
  };
}

export interface StudentExtraProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    description: '';
    displayName: 'Project';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
  };
}

export interface StudentExtraRank extends Struct.ComponentSchema {
  collectionName: 'components_rank_details_ranks';
  info: {
    description: '';
    displayName: 'rank';
    icon: 'id-badge';
  };
  attributes: {
    all_india: Schema.Attribute.Integer;
    category_rank: Schema.Attribute.Integer;
    exam: Schema.Attribute.Enumeration<['JEE', 'GATE']>;
  };
}

export interface StudentExtraSpi extends Struct.ComponentSchema {
  collectionName: 'components_spi_details_spis';
  info: {
    description: '';
    displayName: 'spi';
    icon: 'database';
  };
  attributes: {
    sem1: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem10: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem2: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem3: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem4: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem5: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem6: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem7: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem8: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    sem9: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company.contact-details': CompanyContactDetails;
      'job.course-list': JobCourseList;
      'job.hr': JobHr;
      'job.package': JobPackage;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'student-extra.address': StudentExtraAddress;
      'student-extra.applied-job': StudentExtraAppliedJob;
      'student-extra.project': StudentExtraProject;
      'student-extra.rank': StudentExtraRank;
      'student-extra.spi': StudentExtraSpi;
    }
  }
}
